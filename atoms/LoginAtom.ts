/* eslint-disable import/no-unresolved */
import { atom } from "recoil";

export const loginModalState = atom({
  key: "loginModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const isLoginState = atom({
  key: "isLoginState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const notesState = atom({
  key: "notesState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export const noteState = atom({
  key: "noteState", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
