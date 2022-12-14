import axios from "axios";

interface AuthProps {
  email: string;
  password: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export async function Daftar(username: string, email: string, password: string) {
  try {
    const res = await axios.post(`${baseUrl}/v1/register`, { username, email, password });
    return res;
  } catch (error) {
    return error;
  }
}

export async function Login(email: string, password: string) {
  const res = await axios.post(`${baseUrl}/v1/login`, { email, password });
  return res.data;
}

export function Logout({ email, password }: AuthProps) {
  return { email, password };
}
