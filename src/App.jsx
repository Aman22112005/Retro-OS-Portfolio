import React, { useState } from "react";
import BootScreen from "./Components/Booting/BootScreen2";
import ComingSoon from "./Components/coming soon/ComingSoon";
import Loading from "./Components/Booting/loading/Loading";
import Desktop from "./Components/OS/Desktop/Desktop";
import { Accounts } from "./Components/Booting/accounts/Accounts";
import { Password } from "./Components/Booting/accounts/Password";

const App = () => {
  const [Page, setPage] = useState("boot");
  const [accountType, setaccountType] = useState(null);

  /**
   *
   * @param {React.MouseEvent} e
   */
  const OnRightClick = (e) => {
    e.preventDefault();
  };

  if (Page == "boot") {
    return (
      <div onContextMenu={(e) => OnRightClick(e)}>
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
      <div onContextMenu={(e) => OnRightClick(e)}>
        <ComingSoon goBack={() => setPage("boot")}/>
      </div>
    );
  }

  if (Page == "loading") {
    return (
      <div onContextMenu={(e) => OnRightClick(e)}>
        <Loading onLoadingComplete={() => setPage("accounts")} />
      </div>
    );
  }

  if (Page == "accounts") {
    return (
      <div onContextMenu={(e) => OnRightClick(e)} className="animate-fade-in">
        <Accounts
          onLogin={(account_type) => {
            setaccountType(account_type);

            if (account_type === "admin") {
              setPage("Password");
            } else {
              setPage("desktop");
            }
          }}
        />
      </div>
    );
  }

  
  if (Page == "Password") {
    return (
      <div onContextMenu={(e) => OnRightClick(e)}>
        <Password
          onCorrect={() => {
            setPage("desktop");
            setaccountType("admin");
          }}
          onSwitch={() => setPage("accounts")}
        />
      </div>
    );
  }

  if (accountType == "admin") {
    return (
      <div>
        <ComingSoon goBack={() => setPage("accounts")}/>
      </div>
    );
  }

  if (Page == "desktop") {
    return (
      <div onContextMenu={(e) => OnRightClick(e)}>
        <Desktop accounttype={accountType} />
      </div>
    );
  }
};

export default App;
