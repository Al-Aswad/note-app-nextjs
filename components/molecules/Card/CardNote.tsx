import { useRecoilState, useRecoilValue } from "recoil";
import { isUpdateState, noteState } from "../../../atoms/LoginAtom";

export default function CardNotes({ note }: any) {
  const [isUpdate, setIsUpdate] = useRecoilState(isUpdateState);

  const [noteS, setNoteS] = useRecoilState(noteState);

  const { id,
    title, body, description: desc, created_at,
  } = note;

  console.log("Title ", title);
  console.log("Body ", body);
  console.log("Desc ", desc);
  console.log("Created At ", created_at);


  const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const newDate = new Date(created_at).toLocaleDateString('en-US', options)

  const handleEdit = () => {
    console.log("Note ", note);
    setIsUpdate(true);
    setNoteS({ ...note, id: id, title: title, body: body, desc: desc });
  };

  return (
    <div className="card p-2 w-full bg-slate-700 rounded-md flex flex-col gap-2 shadow-sm justify-between">
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-slate-500">{newDate}</p>
        <p className="text-thin text-sm mt-2">{body}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button type="button" className="text-red-700 hover:bg-red-500 py-1 hover:text-white rounded-md text-center w-full">
          Delete
        </button>
        <button
          onClick={handleEdit}
          type="button"
          className="text-yellow-700 hover:bg-yellow-500 hover:text-white rounded-md w-full"
        >
          Edit
        </button>
        <button type="button" className="text-green-700 hover:bg-green-500 hover:text-white rounded-md w-full">
          Done
        </button>
      </div>
    </div>
  );
}
