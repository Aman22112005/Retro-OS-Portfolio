import React from "react";

const Taskbar = () => {
  return (
    // 1. Taskbar Base: Added a white top border to separate it from the desktop
    <div className="bg-os-gray border-t-2 border-t-white flex h-8 w-screen flex-row items-center justify-between px-1 text-os-base">
      
      {/* Container for Start Button and Tabs */}
      <div className="flex h-full flex-row items-center gap-1 py-1 ">
        
        {/* 2. START BUTTON (OUTSET) */}
        {/* Light on top/left, dark on bottom/right */}
        <div className="bg-os-gray border-t-2 border-l-2 border-b-2 border-r-2 border-t-white border-l-white border-b-black border-r-black flex h-full cursor-pointer items-center px-2 font-bold active:border-t-black active:border-l-black active:border-b-white active:border-r-white">
          Start
        </div>

        {/* 3. OPEN APP TAB (INSET) */}
        {/* An open app looks "pressed in", so we reverse the borders to dark on top/left */}
        <div className="bg-os-gray border-t-2 border-l-2 border-b-2 border-r-2 border-t-black border-l-black border-b-white border-r-white flex h-full items-center px-2 font-bold bg-white/50">
          App
        </div>
      </div>

      {/* 4. SYSTEM TRAY / CLOCK (INSET) */}
      <div className="border-t-2 border-l-2 border-b-2 border-r-2 border-t-black border-l-black border-b-white border-r-white flex h-full items-center px-2 text-xs my-1">
        15/06/2026 15:24
      </div>
      
    </div>
  );
};

export default Taskbar;