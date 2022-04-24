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
        { isOpen ? <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={classes.content2} style={{ position: "fixed" , backgroundColor: '#1a1d29', display: 'flex', flexDirection: 'column', zIndex: 2 }} >
                <div className={classes.pic} style={{ width: '30rem', height: '30rem' ,position: 'fixed', right: '20%', top: '35%' }} >
                    <motion.img className={classes.img} src={props.pics[0]} />
                </div>
            
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
            <p className={classes.watchTitle} style={{ marginBottom: '3rem', textAlign: 'left' }}>Add Profile</p>
                <input onChange={(e) => setNewName(e.target.value)} style={{ width: '30%', height: '6rem', border: 'none', backgroundColor: 'rgb(73, 73, 73)' ,  paddingLeft: '1rem'}} type="text" placeholder="NAME"></input>
            </div>
            <motion.button
                    whileHover={{ color: "white", backgroundColor: '#515255' }}
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
            <div style={{ width: '100%', display: 'flex'}} >
                <motion.button
                    whileHover={{ color: "white", backgroundColor: '#3da6fe' }}
                    whileTap={{
                        scale: 0.9,
                        border: "solid .15rem white",
                        color: "white",
                    }}
                    initial={{ scale: 1 }}
                    className={classes.button2}
                    style={{ width: '30.5%', marginTop: "2rem",  gridArea: "manageProfile", backgroundColor: '#0072d2', color: "white" }}
                    onClick={() =>  { setOpen(!isOpen); setIndex(index+1); setName(newName)}}
                    
                    >
                    SAVE
                </motion.button>
                
            </div>
        </motion.div> : ""}
        </openContextNewProfile.Provider>
    )
}
export default NewProfile;