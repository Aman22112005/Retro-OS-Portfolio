import React from "react";
import guestimg from "../../../assets/guest.gif";
import adminimg from "../../../assets/admin.gif";

export const Accounts = ({ onLogin }) => {
  return (
    <div className="bg-os-teal flex h-screen w-screen flex-row items-center justify-center gap-12">
      <div
        className="flex flex-col items-center gap-2 transition-all hover:cursor-pointer hover:brightness-110"
        onClick={() => onLogin("guest")}
      >
        <div className="h-24 w-24 overflow-hidden rounded-2xl border-2 border-gray-300 shadow-lg">
          <img
            src={guestimg}
            alt="Guest Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-md text-center font-sans tracking-wide text-white drop-shadow-md">
          Guest
        </div>
      </div>

      <div
        className="flex flex-col items-center gap-2 transition-all hover:cursor-pointer hover:brightness-150"
        onClick={() => onLogin("admin")}
      >
        <div className="h-24 w-24 overflow-hidden rounded-2xl border-2 border-gray-300 shadow-lg">
          <img
            src={adminimg}
            alt="Admin Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-md text-center font-sans tracking-wide text-white drop-shadow-md">
          Aman
        </div>
      </div>
    </div>
  );
};
