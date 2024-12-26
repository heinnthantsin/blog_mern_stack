import React, { useState } from "react";
import { IKImage } from "imagekitio-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const urlEndpoint = import.meta.env.VITE_IK_URL_ENDPOINT;
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <IKImage
          urlEndpoint={urlEndpoint}
          path="./blog_logo.png"
          alt="logo"
          className="w-10 h-10 rounded-xl"
        />
        <span>SimpleBlog</span>
      </div>
      {/* mobile menu  */}
      <div className="md:hidden">
        <div className="cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
        {/* mobile link list  */}
        <div
          className={`w-full h-screen flex flex-col justify-center items-center absolute top-16 transition-all ease-in ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          menu
        </div>
      </div>
      {/* deskop menu */}
      <div className="hidden md:flex items-center gap-5 xl:gap-8 2xl:gap-12">
        <a href="">Home</a>
        <a href="">Trending</a>
        <a href="">Popular</a>
        <a href="">About</a>
        <a
          href=""
          className="bg-slate-400 border border-1 rounded-2xl p-3 text-yellow-300"
        >
          Login
        </a>
      </div>
    </div>
  );
}

export default Navbar;
