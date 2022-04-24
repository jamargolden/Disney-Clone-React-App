import { Player, Controls } from "@lottiefiles/react-lottie-player";
import classes from "./components/App.module.css"
import netflix from "./lottie/netflix.json"
import Watching from "./components/Watching";
import Library from "./components/Library";
import { createContext, useContext } from "react";
import React, { useEffect, useRef, useState } from "react";


export const appContext = createContext(false);

function App() {
  const [ currentProfile, setCurrentProfile ] = useState(0);
  const [ isLibraryOpen, setLibraryOpen ] = useState(false);
  const [ myProfiles, setMyProfiles ] = useState([]);

  console.log(currentProfile);
  return (
    <appContext.Provider value={{ profileList: [ myProfiles, setMyProfiles ], current: [ currentProfile, setCurrentProfile ], openLibrary: [ isLibraryOpen, setLibraryOpen ] }} >
      <div className={classes.app}>
        { isLibraryOpen ? <Library img={myProfiles[currentProfile][1]} /> : "" }
        { !isLibraryOpen ? <Watching/> : ""}
        <div className={classes.load}>
          
        </div>
        
      </div>
    </appContext.Provider>
  );
}

export default App;
