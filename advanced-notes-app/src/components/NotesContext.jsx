import { createContext, useContext, useEffect, useReducer } from "react";
import { notesReducer } from "./notesReducer";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, dispatch] = useReducer(notesReducer, []);

  // لود کردن یادداشت‌ها از localStorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    dispatch({ type: "SET_NOTES", payload: storedNotes });
  }, []);

  // ذخیره یادداشت‌ها در localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);