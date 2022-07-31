export default function FormAddNote() {
  return (
    <form action="">
      <div className="flex gap-4 flex-col">
        <div className="flex flex-col items-end gap-1">
          <input
            className="input"
            type="text"
            name="title"
            id="title"
            placeholder="Title ..."
          />
        </div>
        <div>
          <input
            className="input"
            type="text"
            name="body"
            id="body"
            placeholder="Body ..."
          />
        </div>
        <div>
          <textarea
            className="input"
            name="desc"
            id="desc"
            placeholder="Tulis catatanmu di sini"
          />
        </div>
        <button className="button" type="submit">Buat Note</button>
      </div>
    </form>
  );
}
