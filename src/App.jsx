import React, { useState } from "react";
import BootScreen from "./Components/Booting/BootScreen";
import ComingSoon from "./Components/coming soon/ComingSoon";
import Loading from "./Components/Booting/loading/Loading";
import Desktop from "./Components/OS/Desktop/Desktop";

const App = () => {
  const [isbooting, setIsbooting] = useState(true);
  const [isloading, setIsloading] = useState(false);

  /**
   *
   * @param {React.MouseEvent} e
   */
  const OnRightClick = (e) => {
    e.preventDefault();
  };

  if (isbooting) {
    return (
      <div onClick={(e) => OnRightClick(e)}>
        <BootScreen
          onBootComplete={() => {
            setIsbooting(false);
            setIsloading(true);
          }}
        />
      </div>
    );
  }

  if (!isbooting && isloading) {
    return (
      <div onClick={(e) => OnRightClick(e)}>
        <Loading onLoadingComplete={() => setIsloading(false)} />
      </div>
    );
  }

  return (
    <div onClick={(e) => OnRightClick(e)}>
      <Desktop />
    </div>
  );
};

export default App;
