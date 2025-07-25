import NoteCard from "../components/NoteCard";
import { useNotes } from "../context/NotesContext";

const Home = () => {
  const { notes, dispatch } = useNotes();

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_NOTE", payload: id });
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">یادداشت‌های من</h1>

      {notes.length === 0 ? (
        <p className="text-gray-500">هیچ یادداشتی ثبت نشده.</p>
      ) : (
        <div className="grid gap-4">
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;