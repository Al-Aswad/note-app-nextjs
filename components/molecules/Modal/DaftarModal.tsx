import Cookies from "js-cookie";
import Modal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { daftarModalState, isLoginState, notesState } from "../../../atoms/LoginAtom";
import { Daftar, Login } from "../../../services/Auth";
import { getNotes } from "../../../services/Notes";

export default function DaftarModal() {
  const [open, setOpen] = useRecoilState(daftarModalState);
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [notes, setNotes] = useRecoilState(notesState);
  const handleClose = () => setOpen(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleGetNotes = async () => {
    const res = await getNotes();
    console.log(res);
    setNotes(res.data);
  };

  const handleDaftar = async () => {

    if (password !== confirmPassword) {
      setMsg("Password tidak sama");
      return;
    }

    const res: any = await Daftar(username, email, password);
    console.log(res);
    if (res?.data?.status === true) {
      setOpen(false);
    } else {
      console.log(res);
      setMsg(res.response.data.message);
    }
  };

  return (
    <div>
      <Modal
        className="flex justify-center items-center"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          className="bg-slate-700 rounded-md max-w-md absolute p-10"
        >
          <div>
            <h1 className="text-white text-lg">Form Registrasi</h1>
            <p className="text-sm text-white">
              Silahkan masukkan email dan password anda
            </p>
            {
              msg
                ? <p className="text-xl my-2 text-center text-red-500">{msg}</p>
                : null
            }
            <div className="mt-4">
              <form action="">
                <div>
                  <label className="text-sm text-slate-200" htmlFor="email">
                    username
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      className="input mt-2"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Masukkan email..."
                    />
                  </label>

                </div>
                <div>
                  <label className="text-sm text-slate-200" htmlFor="email">
                    Email
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="input mt-2"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Masukkan email..."
                    />
                  </label>

                </div>
                <div className="mt-2">
                  <label className="text-sm text-slate-200" htmlFor="password">
                    Password
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="input mt-2"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Masukkan password..."
                    />
                  </label>
                </div>
                <div className="mt-2">
                  <label className="text-sm text-slate-200" htmlFor="password">
                    Confirm Password
                    <input
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="input mt-2"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Masukkan password..."
                    />
                  </label>
                </div>
              </form>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="button"
              onClick={handleDaftar}
            >
              Daftar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
