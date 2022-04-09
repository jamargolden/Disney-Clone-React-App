import { motion } from "framer-motion";
import classes from "./App.module.css";
import { createContext } from "react";
import { useContext } from "react";
import { openContext } from "./Watching";
import React, { useEffect, useRef, useState } from "react";

export const openContextNewProfile = createContext(false);

function NewProfile(props){
    //Context from the Watching.js file
    const { addProfileOpen, getName, i } = useContext(openContext)
    //Tells if the Add Profile modal is open
    const [isOpen, setOpen] = addProfileOpen;
    //Sets the profile name for a new profile being created
    const [name, setName] = getName;
    //Gets the name typed in the input by the user
    const [ newName, setNewName ] = useState("")
    //Index of the list of profiles name myProfiles
    const [ index, setIndex ] = i;
    

    return(
        <openContextNewProfile.Provider value={{}} >
        { isOpen ? <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={classes.content} style={{ position: "fixed" , backgroundColor: 'rgb(15, 15, 15)', display: 'flex', flexDirection: 'column', zIndex: 2}} >
            <p className={classes.watchTitle} style={{ marginBottom: '1rem' }}>Add Profile</p>
            <p className={classes.profileName} style={{ marginTop: 0, marginBottom: '2rem' }} >Add a profile for another person watching Netflix.</p>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className={classes.pic}>
                    <motion.img className={classes.img} src={props.pics[0]} />
                </div>
                <input onChange={(e) => setNewName(e.target.value)} style={{ width: '35%', height: '3rem', marginLeft: '2rem', border: 'none', backgroundColor: 'rgb(73, 73, 73)' ,  paddingLeft: '1rem'}} type="text" placeholder="NAME"></input>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                <motion.button
                    whileHover={{ border: "solid .1rem white", color: "white" }}
                    whileTap={{
                        scale: 0.9,
                        border: "solid .15rem white",
                        color: "white",
                    }}
                    initial={{ scale: 1 }}
                    className={classes.button}
                    style={{ width: '15%', marginTop: "2rem",  gridArea: "manageProfile", backgroundColor: 'red', color: "white" }}
                    onClick={() =>  { setOpen(!isOpen); setIndex(index+1); setName(newName)}}
                    
                    >
                    CONTINUE
                </motion.button>
                <motion.button
                    whileHover={{ border: "solid .1rem white", color: "white" }}
                    whileTap={{
                        scale: 0.9,
                        border: "solid .15rem white",
                        color: "white",
                    }}
                    initial={{ scale: 1 }}
                    className={classes.button}
                    style={{ width: '10%', marginTop: "2rem", marginLeft: "1rem", gridArea: "manageProfile" }}
                    onClick={() => setOpen(!isOpen)}
                    >
                    CANCEL
                </motion.button>
            </div>
        </motion.div> : ""}
        </openContextNewProfile.Provider>
    )
}
export default NewProfile;