export const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];

    case "DELETE_NOTE":
      return state.filter(note => note.id !== action.payload);

    case "UPDATE_NOTE":
      return state.map(note =>
        note.id === action.payload.id ? action.payload : note
      );

    case "SET_NOTES":
      return action.payload;

    default:
      return state;
  }
};