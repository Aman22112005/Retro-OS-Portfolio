import React, { useState } from "react";
import BootScreen from "./Components/Booting/BootScreen";
import ComingSoon from "./Components/coming soon/ComingSoon";

const App = () => {
  const [isbooting, setIsbooting] = useState(true);

  if (isbooting) {
    return <BootScreen onBootComplete={() => setIsbooting(false)} />;
  }

  return (
    <div>
      <ComingSoon />
    </div>
  );
};

export default App;
