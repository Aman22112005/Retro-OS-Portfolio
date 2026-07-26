import React, { useState } from "react";
import BootScreen from "./Components/Booting/BootScreen2";
import ComingSoon from "./Components/coming soon/ComingSoon";
import Loading from "./Components/Booting/loading/Loading";
import Desktop from "./Components/OS/Desktop/Desktop";

const App = () => {
  const [Page, setPage] = useState("boot");

  /**
   *
   * @param {React.MouseEvent} e
   */
  const OnRightClick = (e) => {
    e.preventDefault();
  };

  if (Page == "boot") {
    return (
      <div onClick={(e) => OnRightClick(e)}>
        <BootScreen
          onBootComplete={() => {
            setPage("loading");
          }}
          bootMenu={() => {
            setPage("bootmenu");
          }}
        />
      </div>
    );
  }

  if (Page == "bootmenu") {
    return (
      <div>
        <ComingSoon />
      </div>
    );
  }

  if (Page == "loading") {
    return (
      <div onClick={(e) => OnRightClick(e)}>
        <Loading onLoadingComplete={() => setPage("desktop")} />
      </div>
    );
  }

  if (Page == "desktop") {
    return (
      <div onClick={(e) => OnRightClick(e)}>
        <Desktop />
      </div>
    );
  }
};

export default App;
