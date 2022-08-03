import { title } from "process";
import { FormEvent, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  isUpdateState, notesState, noteState,
} from "../../../atoms/LoginAtom";
import { getNotes, saveNote } from "../../../services/Notes";

export default function FormAddNote() {
  const [isUpdate, setIsUpdate] = useRecoilState(isUpdateState);
  const [notes, setNotes] = useRecoilState(notesState);
  const [note, setNote] = useRecoilState(noteState);

  const handleGetNotes = async () => {
    const res = await getNotes();
    console.log("Notes ", res);
    setNotes(res.data);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (note.title.length > 0 && note.body.length > 0) {

      const res = await saveNote(note.title, note.body, note.desc);
      console.log(res);
      setNote({ ...note, title: "", body: "", desc: "" });
      console.log("Note After Save", note);
      handleGetNotes();
    } else {
      alert("Please fill all the fields");
    }
  };


  return (
    <form onSubmit={(e) => { handleSubmit(e); }}>
      <div className="flex gap-4 flex-col">
        <div className="flex flex-col items-end gap-1">
          <input
            value={note.title}
            className="input"
            type="text"
            name="title"
            id="title"
            placeholder="Title ..."
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
        </div>
        <div>
          <input
            value={note.body}
            className="input"
            type="text"
            name="body"
            id="body"
            placeholder="Body ..."
            onChange={(e) => setNote({ ...note, body: e.target.value })}
          />
        </div>
        <div>
          <textarea
            value={note.desc}
            className="input"
            name="desc"
            id="desc"
            placeholder="Tulis catatanmu di sini"
            onChange={(e) => setNote({ ...note, desc: e.target.value })}
          />
        </div>
        <button
          className="button"
          type="submit"
        >
          {isUpdate ? "Ubah" : "Tambah"}
        </button>
      </div>
    </form>
  );
}
