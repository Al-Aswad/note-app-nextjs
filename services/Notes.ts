import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "../constants/note";

export async function getNotes() {
  const token = Cookies.get("token") ?? "token";
  const res = await axios.get(`${BASE_URL}/v1/notes`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function getNote() {
  const res = await axios.post(`${BASE_URL}/v1/login`);
  return res.data;
}
