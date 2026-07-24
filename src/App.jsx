import React, { useState } from "react";
import BootScreen from "./Components/Booting/BootScreen";
import ComingSoon from "./Components/coming soon/ComingSoon";
import Loading from "./Components/Booting/loading/Loading";

const App = () => {
  const [isbooting, setIsbooting] = useState(true);
  const [isloading, setIsloading] = useState(false);

  if (isbooting) {
    return (
      <BootScreen
        onBootComplete={() => {
          setIsbooting(false);
          setIsloading(true);
        }}
      />
    );
  }

  if(!isbooting && isloading){
    return <Loading onLoadingComplete={() => setIsloading(false)} />
  }

  return (
    <div>
      <ComingSoon />
    </div>
  );
};

export default App;
