/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { daftarModalState, loginModalState } from "../../../atoms/LoginAtom";
import DaftarModal from "../../molecules/Modal/DaftarModal";
import LoginModal from "../../molecules/Modal/LoginModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useRecoilState(loginModalState);
  const [isOpenDaftar, setIsOpenDaftar] = useRecoilState(daftarModalState);
  const [isLogin, setIsLogin] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleOpenDaftar = () => {
    setIsOpenDaftar(true);
  };

  const handleIsLogin = () => {
    const token = Cookies.get("token");
    if (token) {
      setIsLogin(true);
    }
  };

  useEffect(() => {
    handleIsLogin();
  });

  const handleLogout = () => {
    Cookies.remove("token");
    setIsLogin(false);
  };

  return (
    <>
      <nav className="py-4 px-10 flex items-center justify-between border-b border-slate-600">
        <div>
          <h1 className="font-semibold text-4xl">Notes</h1>
        </div>

        <div className="w-6/12 sm:w-5/12 flex gap-4">
          <input className="input hidden sm:flex" type="text" name="search" id="search" placeholder="Search ..." />
          {
            isLogin
              ? (
                <button
                  type="submit"
                  className="button"
                  onClick={handleLogout}
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

          <button
            type="submit"
            className="button-secondary"
            onClick={handleOpenDaftar}
          >
            Daftar
          </button>

        </div>
      </nav>
      <LoginModal />
      <DaftarModal />
    </>
  );
}
