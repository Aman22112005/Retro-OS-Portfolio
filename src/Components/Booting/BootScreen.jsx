import React, { useEffect, useState } from "react";

const bootLogs = [
  "BIOS Date 07/23/26 11:48:00 Ver 1.0.4",
  "CPU: Quantum Core i9 @ 5.20GHz",
  "Checking RAM... 32768MB OK",
  "Loading Kernel Module [React DOM]... SUCCESS",
  "Initializing Tailwind CSS Engine... READY",
  "Mounting File System /dev/portfolio... DONE",
  "Establishing connection to Node.js backend... OK",
  "Loading User Profile: GUEST_RECRUITER",
];

const BootScreen = ({ onBootComplete }) => {
  const [displayedlog, setDisplayedlog] = useState([]);
  const [currentTyping, setCurrentTyping] = useState(""); // <-- New state for the active line
  const [Progress, setProgress] = useState(0);

  useEffect(() => {
    // -------------Reseter------
    setDisplayedlog([]);
    setCurrentTyping("");
    setProgress(0);
    // ----------------------------

    let currentindex = 0;
    let charIndex = 0;
    let currentString = "";
    let timeoutId;

    const typeNext = () => {
      // 1. Are there still lines left to process?
      if (currentindex < bootLogs.length) {
        const fullLine = bootLogs[currentindex];

        // 2. Are we still typing the current line?
        if (charIndex < fullLine.length) {
          currentString += fullLine[charIndex];
          setCurrentTyping(currentString);
          charIndex++;

          // Speed of individual keystrokes (very fast: 10ms to 40ms)
          timeoutId = setTimeout(typeNext, Math.floor(Math.random() * 30) + 10);
        }
        // 3. The line is finished!
        else {
          setDisplayedlog((prev) => [...prev, fullLine]); // Push full line to main array
          setCurrentTyping(""); // Clear the typing area
          currentString = ""; // Reset local string
          charIndex = 0; // Reset character counter
          currentindex++; // Move to next line in bootLogs

          // Pause before starting the next line (hesitation: 200ms to 800ms)
          const lineDelay = Math.floor(Math.random() * 600) + 200;
          timeoutId = setTimeout(typeNext, lineDelay);
        }
      }
    };

    typeNext();

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const currentprogress = Math.floor(
      (displayedlog.length / bootLogs.length) * 100,
    );
    setProgress(currentprogress);

    let completionTimeout;
    if (currentprogress >= 100) {
      completionTimeout = setTimeout(() => onBootComplete(), 2000);
    }

    return () => clearTimeout(completionTimeout);
  }, [displayedlog]);

  return (
    <>
      <div className="bg-os-base text-os-green flex h-screen w-full flex-col justify-between p-6 font-mono">
        {/* TOP SECTION */}
        <div>
          {/* 1. Fully typed lines */}
          {displayedlog.map((log, index) => (
            <div key={index} className="mb-1">
              {log}
            </div>
          ))}

          {/* 2. The line currently being typed + Cursor side-by-side */}
          {Progress < 100 && (
            <div className="flex items-center">
              <span>{currentTyping}</span>
              <span className="bg-os-green h-4 w-2 animate-pulse [animation-duration:1s]"></span>
              <span className="text-os-base">h</span> {/*------hidden-------*/}
            </div>
          )}

          {/* 3. The 100% Launch message */}
          {Progress === 100 && (
            <div className="mt-1 flex items-center gap-1">
              <span>Launching Desktop GUI Environment...</span>
              <span className="bg-os-green h-4 w-2 animate-pulse [animation-duration:1s]"></span>
            </div>
          )}
        </div>

        {/* BOTTOM SECTION */}
        <div className="mx-auto w-full max-w-3xl pb-8">
          <div className="mb-1 flex justify-between text-sm">
            <span>System Boot Sequence</span>
            <span>{Progress}%</span>
          </div>

          <div className="border-os-green w-full border-2 p-0.5">
            <div
              style={{ width: `${Progress}%` }}
              className="bg-os-green h-3 transition-all duration-300 ease-out"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BootScreen;
