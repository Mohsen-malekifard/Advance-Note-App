import { Link } from "react-router-dom";

const NoteCard = ({ note, onDelete }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">
      <h2 className="text-lg font-bold mb-2">{note.title}</h2>
      <p className="text-gray-700 mb-4 line-clamp-2">{note.content}</p>

      <div className="flex justify-between text-sm">
        <Link
          to={`/note/${note.id}`}
          className="text-blue-600 hover:underline"
        >
          مشاهده جزئیات
        </Link>
        <Link
          to={`/edit/${note.id}`}
          className="text-yellow-600 hover:underline"
        >
          ویرایش
        </Link>
        <button
          className="text-red-600 hover:underline"
          onClick={() => onDelete(note.id)}
        >
          حذف
        </button>
      </div>
    </div>
  );
};

export default NoteCard;