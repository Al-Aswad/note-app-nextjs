/* eslint-disable import/no-unresolved */
import { atom } from "recoil";

export const loginState = atom({
  key: "loginState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const loginState1 = atom({
  key: "textState1", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
