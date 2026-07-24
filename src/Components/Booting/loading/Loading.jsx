import React, { useEffect } from "react";
import asbLogo from "../../../assets/logo.png";

const Loading = ({ onLoadingComplete }) => {
  (useEffect(() => {
    let completionTimeout = setTimeout(() => onLoadingComplete(), 2000);

    return () => clearTimeout(completionTimeout);
  }),
    []);

  return (
    <div className=" h-screen w-screen flex justify-center items-center cursor-none">
      <img src={asbLogo} alt="" draggable="false" className="select-none pointer-events-none" />
    </div>
  );
};

export default Loading;
