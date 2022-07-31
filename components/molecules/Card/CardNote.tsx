export default function CardNotes({ note }: any) {
  const {
    title, body, created_at,
  } = note;
  return (
    <div className="card p-2 w-full bg-slate-700 rounded-md flex flex-col gap-2 shadow-sm justify-between">
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-slate-500">{created_at}</p>
        <p className="text-thin text-sm mt-2">{body}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button type="button" className="text-red-700 hover:bg-red-500 py-1 hover:text-white rounded-md text-center w-full">
          Delete
        </button>
        <button type="button" className="text-yellow-700 hover:bg-yellow-500 hover:text-white rounded-md w-full">
          Edit
        </button>
        <button type="button" className="text-green-700 hover:bg-green-500 hover:text-white rounded-md w-full">
          ss
        </button>
      </div>
    </div>
  );
}
