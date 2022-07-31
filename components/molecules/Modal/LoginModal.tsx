/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Cookies from "js-cookie";
import Modal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { loginState } from "../../../atoms/LoginAtom";
import { Login } from "../../../services/Auth";

export default function LoginModal() {
  const [open, setOpen] = useRecoilState(loginState);
  const handleClose = () => setOpen(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handelSubmitLogin = async () => {
    const res = await Login(email, password);
    if (res.status === true) {
      Cookies.set(
        "token",
        res.data.token,
        {
          expires: 1,
          secure: true,
          sameSite: "strict",
        },
      );
      setOpen(false);
    } else {
      setMsg("Login Failed");
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
              </form>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="button"
              onClick={handelSubmitLogin}
            >
              Login
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
