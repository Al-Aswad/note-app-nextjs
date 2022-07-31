/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useState } from "react";
import { useRecoilState } from "recoil";
import { loginState } from "../../../atoms/LoginAtom";
import LoginModal from "../../molecules/Modal/LoginModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useRecoilState(loginState);
  const [isLogin, setIsLogin] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <nav className="py-4 px-10 flex items-center justify-between border-b border-slate-600">
        <div>
          <h1 className="font-semibold text-4xl">Notes</h1>
        </div>

        <div className="w-6/12 sm:w-3/12 flex gap-4">
          <input className="input" type="text" name="search" id="search" placeholder="Search ..." />
          {
            isLogin
              ? (
                <button
                  type="submit"
                  className="button"
                  onClick={handleOpen}
                >
                  Logout
                </button>
              )
              : (
                <button
                  type="submit"
                  className="button"
                  onClick={handleOpen}
                >
                  Login
                </button>
              )
          }

        </div>
      </nav>
      <LoginModal />
    </>
  );
}
