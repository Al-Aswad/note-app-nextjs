/* eslint-disable import/no-unresolved */
import { atom } from "recoil";

export const loginModalState = atom({
  key: "keyModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const isLoginState = atom({
  key: "keyIsLoginState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const notesState = atom({
  key: "keyNotesState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const noteState = atom({
  key: "keyNoteState", // unique ID (with respect to other atoms/selectors)
  default: {
    id: "",
    title: "",
    body: "",
    desc: "",
  }, // default value (aka initial value)
});

export const isUpdateState = atom({
  key: "keyIsUpdateState", // unique ID (with respect to other atoms/selectors)
  default: false,
});

export const noteTitleState = atom({
  key: "keyNoteTitleState", // unique ID (with respect to other atoms/selectors)
  default: "",
});
