import React, { useEffect, useRef, useState } from "react";

const BootScreen = ({ onBootComplete, bootMenu }) => {
  const [logs, setLogs] = useState([]);

  const inputAllowed = useRef(false);

  useEffect(() => {
    /** @param {KeyboardEvent} e */
    const captureKey = (e) => {
      if (inputAllowed) {
        if (e.key == "Enter") {
          onBootComplete();
        } else if (e.key == "F8") {
          bootMenu();
        }
      }
    };

    window.addEventListener("keydown", captureKey);
    const timer1 = setTimeout(() => {
      setLogs([
        "ASB Megatrends, Inc.",
        "Version 2.14.1204. Copyright (C) 1999-2026, ASB Megatrends, Inc.",
        " ",
        "ASB OS Bootloader v1.0",
        " ",
        "CPU : AMD Ryzen 5 5500GT Processor",
        "MEM : 32768 MB OK",
        "GPU : NVIDIA GeForce RTX 3050 OK",
        " ",
        "Detecting Primary Master ...",
      ]);
    }, 1500);

    const timer2 = setTimeout(() => {
      setLogs((prevLogs) => [
        ...prevLogs.slice(0, -1),
        "Detecting Primary Master ... ASB Solid State Drive",
        "Detecting Primary Slave  ... None",
        " ",
        "Press [Enter] to boot the system normally",
        "Press [F8] to enter Advanced Boot Options",
      ]);
      inputAllowed.current = true;
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("keydown", captureKey);
    };
  }, []);

  return (
    <div className="h-screen w-screen cursor-none bg-black p-4 font-mono text-sm whitespace-pre-wrap text-white">
      {logs.map((log, index) => (
        <div key={index}>{log}</div>
      ))}
    </div>
  );
};

export default BootScreen;
