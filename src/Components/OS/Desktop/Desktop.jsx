import React from "react";
import Taskbar from "./Taskbar";
import recycle_bin from "../../../assets/recycle_bin.ico";
import floppy from "../../../assets/floppy_drive.ico";
import directory from "../../../assets/directory.ico";
import user from "../../../assets/user.ico";
import browser from "../../../assets/browser.ico";
import WindowFrame from "../Windows/frame";
import Draggable from "react-draggable";
import { Resizable } from "react-resizable";

const DesktopIcon = ({ icon_src, label }) => {
  return (
    <div className="gap-.5 flex h-17 w-15 cursor-pointer flex-col items-center pt-1 text-center hover:bg-white/10">
      <img src={icon_src} alt={label} className="h-10 select-none"></img>
      <div className="line-clamp-2 w-full text-[.65rem] leading-[1.1] wrap-break-word text-white">
        {label}
      </div>
    </div>
  );
};

const Desktop = () => {
  return (
    <div className="bg-os-teal relative flex h-screen w-screen flex-col justify-between overflow-hidden">
      <div className="absolute">
        <WindowFrame />
      </div>

      <div>
        <div className="m-3 flex h-[calc(100vh-48px)] flex-col flex-wrap content-start items-start gap-1">
          <DesktopIcon icon_src={user} label="WhoAmI" />
          <DesktopIcon icon_src={floppy} label="My Projects" />
          <DesktopIcon icon_src={browser} label="Browser" />
          <DesktopIcon icon_src={directory} label="Portfolio" />
          <DesktopIcon icon_src={recycle_bin} label="Recycle bin" />
        </div>
      </div>
      <div className="absolute bottom-0">
        <Taskbar />
      </div>
    </div>
  );
};

export default Desktop;
