import { useRecoilState, useRecoilValue } from "recoil";
import { isUpdateState, notesState, noteState } from "../../../atoms/LoginAtom";
import { archiveNote, deleteNote, getNotes } from "../../../services/Notes";

interface noteProps {
  note: any;
  is_archive: boolean;
}

export default function CardNotes({ note }: any) {
  const [isUpdate, setIsUpdate] = useRecoilState(isUpdateState);
  const [notes, setNotes] = useRecoilState(notesState);
  const [noteS, setNoteS] = useRecoilState(noteState);

  const { id,
    title, body, description: desc, created_at,
  } = note;

  const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const newDate = new Date(created_at).toLocaleDateString('en-US', options)

  const handleGetNotes = async () => {
    const res = await getNotes();
    setNotes(res.data);
  };

  const handleEdit = () => {
    setIsUpdate(true);
    setNoteS({ ...note, id: id, title: title, body: body, desc: desc });
  };

  const handleDelete = async (id: number) => {
    const res = await deleteNote(id);

    console.log("Delete Note ", res);
    handleGetNotes();
  }

  const handleArchive = async (id: number) => {
    console.log("Archive Note Status ", !note.is_archive);
    const res = await archiveNote(id, !note.is_archive);
    // console.log("Archive Note ", res);
    handleGetNotes();
  }

  return (
    <div className="card p-2 w-full bg-slate-700 rounded-md flex flex-col gap-2 shadow-sm justify-between">
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-slate-500">{newDate}</p>
        <p className="text-thin text-sm mt-2">{body}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handleDelete(parseInt(id))}
          type="button"
          className="text-red-700 hover:bg-red-500 py-1 hover:text-white rounded-md text-center w-full">
          Delete
        </button>
        <button
          onClick={handleEdit}
          type="button"
          className="text-yellow-700 hover:bg-yellow-500 hover:text-white rounded-md w-full"
        >
          Edit
        </button>
        <button
          onClick={() => handleArchive(parseInt(id))}
          type="button"
          className="text-green-700 hover:bg-green-500 hover:text-white rounded-md w-full">
          {
            note.is_archive ? "Unarchive" : "Archive"
          }
        </button>
      </div>
    </div>
  );
}
