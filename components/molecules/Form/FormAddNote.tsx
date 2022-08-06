import { useSnackbar, VariantType } from "notistack";
import { FormEvent } from "react";
import { useRecoilState } from "recoil";
import {
  isUpdateState, notesState, noteState,
} from "../../../atoms/LoginAtom";
import { getNotes, saveNote, updateNote } from "../../../services/Notes";

export default function FormAddNote() {
  const { enqueueSnackbar } = useSnackbar();
  const [isUpdate, setIsUpdate] = useRecoilState(isUpdateState);
  const [notes, setNotes] = useRecoilState(notesState);
  const [note, setNote] = useRecoilState(noteState);

  const handleGetNotes = async () => {
    const res = await getNotes();
    console.log("Notes ", res);
    setNotes(res.data);
  };

  const handleClickVariant = (messange: string, variant: VariantType) => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar(messange, {
      variant, anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      }
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (note.title.length > 0 && note.body.length > 0) {

      if (isUpdate) {
        const res = await updateNote(parseInt(note.id), note.title, note.body, note.desc);
        handleClickVariant("Note Updated !", "success");
        console.log(res);
      } else {
        const res = await saveNote(note.title, note.body, note.desc);
        handleClickVariant("Note Seved !", "success");
        console.log(res);
      }

      setNote({ ...note, title: "", body: "", desc: "" });
      console.log("Note After Save", note);
      handleGetNotes();
      setIsUpdate(false);
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
