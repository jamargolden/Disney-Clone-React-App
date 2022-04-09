import { motion } from "framer-motion";
import classes from "./App.module.css";
import logo from "../img/logo.png";
import addBtn from "../img/addprofile.png";
import rooster from "../img/rooster.png";
import React, { useEffect, useRef, useState } from "react";
import Profile from "./Profile";
import NewProfile from "./NewProfile";
import { createContext } from "react";
import EditProfile from "./EditProfile";
import { useContext } from "react";
import { appContext } from "../App";
export const myProfiles = [];

export const openContext = createContext(false);

function Watching() {
  //Images used for profile pictures as well as other button Icons
  const profilePictures = [rooster, addBtn];
  //Sets the profile name for a new profile being created
  const [ profileName, setProfileName ] = useState("");
  //Controls the hover effect of profiles and various buttons on this page and connected Modals
  const [ isHover, setHover] = useState(false);
  //Index of the list of profiles name myProfiles
  const [ index, setIndex ] = useState(0)
  //tells if the edit profile modal is open or not
  const [ iseditOpen, setEditOpen ] = useState(false);
  //Shows or hides the Edit Profile Modal
  const [ showEdit, setShowEdit ] = useState(false);
  //index of the selected profile to edit the profile details
  const [ profileIndex, setpIndex ] = useState("");
  //Sets and assigns the new profile name for a profile being edited
  const [ updatedName, setUpdate ] = useState("");
  //Allows a profile to be deleted
  const [ deleteProfile, setDelete ] = useState(false);
  //variable used for key generation for profiles
  var i = 0
  //Tells if the Add Profile modal is open
  const [ isAddOpen , setAddOpen ] = useState(false);

  const { openLibrary } = useContext(appContext);

  const [ isLibraryOpen, setLibraryOpen ] = openLibrary;
  
  //Generates a key for the profiles created
  function keyGenerator() {
      return i++;
  }
  //Adds the new profile to the array of profiles and displays it and resets the profile name
  function createProfile(){
    if(profileName != ""){
      myProfiles[index] = [profileName, rooster];
      setProfileName("");
    }
    
      return myProfiles.map((profile, index) => ( <Profile key={keyGenerator()} name={profile[0]} img={profile[1]} /> ))
  }
  //Updates the selected proile name at the given index 
  function updateName(){
    var temp = myProfiles[profileIndex];
    if(updatedName != ""){
      temp[0] = updatedName;
      setUpdate("");
    }
  }
  //Removes the selected profile at the given index
  function removeProfile(){
    if(deleteProfile === true){
      myProfiles.splice(profileIndex, 1)
      setDelete(!deleteProfile);
      
    }
  }

  return (
    //Provides the other modals woth the various useStates to exchange the profile information
    <openContext.Provider value={{ activeProfile: profileIndex, deleteProfile: [ deleteProfile, setDelete ], profiles: myProfiles[profileIndex], nameUpdate: [ updatedName, setUpdate ], showEditModal: [ showEdit, setShowEdit ], edit: [ iseditOpen, setEditOpen ], i:[ index, setIndex ], addProfileOpen: [ isAddOpen, setAddOpen ], getName: [profileName, setProfileName] }} >
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 6 }}
    >
      <div className={classes.watchingLogo}>
          <img className={classes.img} src={logo} />
      </div>
      <EditProfile name={myProfiles[profileIndex]} update={updateName()} remove={removeProfile()} />
      <motion.div
        className={classes.content}
        style={{
          marginTop: "-3rem",
          gridTemplateAreas: '"watchTitle" "profiles" "manageProfile "',
        }}
      >
        
        
            <NewProfile pics={profilePictures} create={createProfile()} />
            
        
        <p className={classes.watchTitle}>Who's watching?</p>
        <motion.div
          className={classes.profileContainer}
        > 
            {myProfiles.map((profile, index) => ( <div onClick={() => iseditOpen ? (setShowEdit(!showEdit), setpIndex(index), console.log(myProfiles[index][0])) : (setLibraryOpen(!isLibraryOpen), setpIndex(index) ) } ><Profile key={keyGenerator()} name={profile[0]} img={profile[1]} /></div> ))}
          <motion.div className={classes.profiles} onClick={() => setAddOpen(!isAddOpen)} >
            <motion.div
                transition={{ ease: "easeIn" }}
                whileHover={{ border: "solid .1rem white" }}
                onHoverStart={() => setHover(!isHover)}
                onHoverEnd={() => setHover(!isHover)}
                className={classes.pic}
            >
                <motion.img className={classes.img} src={addBtn} />
            </motion.div>
            <p
                className={classes.profileName}
                style={isHover ? { color: "white" } : { color: "rgb(73, 73, 73)" }}
            >
                Add Profile
            </p>
            </motion.div>
        </motion.div>
        <motion.button
          whileHover={{ border: "solid .1rem white", color: "white" }}
          whileTap={{
            scale: 0.9,
            border: "solid .15rem white",
            color: "white",
          }}
          initial={{ scale: 1 }}
          className={classes.button}
          style={{ marginTop: "2rem", gridArea: "manageProfile" }}
          onClick={() => setEditOpen(!iseditOpen)}
        >
          MANAGE PROFILES
        </motion.button>
      </motion.div>
    </motion.div>
    </openContext.Provider>
  );
}

export default Watching;
