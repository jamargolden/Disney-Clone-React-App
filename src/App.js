import { Player, Controls } from "@lottiefiles/react-lottie-player";
import classes from "./components/App.module.css"
import netflix from "./lottie/netflix.json"
import Watching from "./components/Watching";
import Library from "./components/Library";
import { createContext, useContext } from "react";
import React, { useEffect, useRef, useState } from "react";
import { openContext } from "./components/Watching";

export const appContext = createContext(false);

function App() {
  const { activeProfile } = useContext(openContext)
  const [ isLibraryOpen, setLibraryOpen ] = useState(false);
  var aProfile = activeProfile;


  return (
    <appContext.Provider value={{ openLibrary: [ isLibraryOpen, setLibraryOpen ] }} >
      <div className={classes.app}>
        { isLibraryOpen ? <Library profile={aProfile} /> : "" }
        { !isLibraryOpen ? <Watching/> : ""}
        <div className={classes.load}>
          <Player
            autoplay
            renderer="svg"
            src={netflix}
            className={classes.loader}
          >
            <Controls visible={false} />
          </Player>
        </div>
        
      </div>
    </appContext.Provider>
  );
}

export default App;
