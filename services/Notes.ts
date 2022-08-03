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

export async function getNote(id:number) {
  const token = Cookies.get("token") ?? "token";
  const res = await axios.get(`${BASE_URL}/v1/login/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export async function saveNote(title:string, body:string, desc:string) {
  const token = Cookies.get("token") ?? "token";
  const res = await axios.post(`${BASE_URL}/v1/notes`, {
    title,
    body,
    desc,
  }, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}
export async function updateNote(id:number, title:string, body:string, desc:string) {
  const token = Cookies.get("token") ?? "token";
  const res = await axios.put(`${BASE_URL}/v1/notes/${id}`, {
    title,
    body,
    desc,
  }, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}
