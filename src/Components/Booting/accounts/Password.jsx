import React from "react";
import adminimg from "../../../assets/admin.gif";
import { FaArrowRightLong } from "react-icons/fa6";

export const Password = ({ onCorrect, onSwitch }) => {
  return (
    <div>
      <div className="bg-os-teal flex h-screen w-screen flex-col items-center justify-center gap-1 gap-3">
        <div className="flex flex-col items-center transition-all">
          <div className="h-24 w-24 overflow-hidden rounded-2xl border-2 border-gray-300 shadow-lg">
            <img
              src={adminimg}

              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-md text-center font-sans tracking-wide text-white drop-shadow-md">
            Aman
          </div>
        </div>
        <form action={() => onCorrect()} className="flex gap-2">
          <input
            type="text"
            className="rounded-sm border border-white bg-white pl-2"
            name=""
            id=""
            placeholder="Password"
          />
          <button
            type="button"
            className="flex px-2 items-center justify-center rounded-sm border border-green-700 bg-green-500 text-white shadow-[1px_1px_2px_rgba(0,0,0,0.3)] transition-all hover:cursor-pointer hover:bg-green-400 active:bg-green-600 active:shadow-none"
            onClick={() => onCorrect()}
          >
            <FaArrowRightLong />
          </button>
        </form>
        <button
          className="text-sm font-medium text-white/80 drop-shadow-sm transition-all hover:cursor-pointer hover:text-white hover:underline"
          onClick={() => onSwitch()}
        >
          ← Switch User
        </button>
      </div>
    </div>
  );
};
