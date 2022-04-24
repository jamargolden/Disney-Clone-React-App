import { motion } from "framer-motion";
import classes from "./App.module.css";
import logo from "../img/disneylogo.png";
import addBtn from "../img/addprofile.png";
import rooster from "../img/spidey.png";
import React, { useEffect, useRef, useState } from "react";
import Profile from "./Profile";
import NewProfile from "./NewProfile";
import { createContext } from "react";
import EditProfile from "./EditProfile";
import { useContext } from "react";
import { appContext } from "../App";

export const openContext = createContext(false);

function Watching() {
  //Images used for profile pictures as well as other button Icons
  const profilePictures = [rooster, addBtn];
  //Sets the profile name for a new profile being created
  const [ profileName, setProfileName ] = useState("");
  //Controls the hover effect of profiles and various buttons on this page and connected Modals
  const [ isHover, setHover] = useState(false);
  //Index of the list of profiles name myProfiles
  const [ isIndex, setIndex ] = useState(0)
  //tells if the edit profile modal is open or not
  const [ iseditOpen, setEditOpen ] = useState(false);
  //Shows or hides the Edit Profile Modal
  const [ showEdit, setShowEdit ] = useState(false);
  //index of the selected profile to edit the profile details
  const [ profileIndex, setpIndex ] = useState(0);
  //Sets and assigns the new profile name for a profile being edited
  const [ updatedName, setUpdate ] = useState("");
  //Allows a profile to be deleted
  const [ deleteProfile, setDelete ] = useState(false);
  //variable used for key generation for profiles
  var i = 0
  //Tells if the Add Profile modal is open
  const [ isAddOpen , setAddOpen ] = useState(false);

  const { openLibrary, current, profileList } = useContext(appContext);

  const [ myProfiles, setMyProfiles ] = profileList;

  const [ isCurrent, setIsCurrent ] = current;

  const [ isLibraryOpen, setLibraryOpen ] = openLibrary;
  
  //Generates a key for the profiles created
  function keyGenerator() {
      return i++;
  }
  function saveToLocal(items){
    window.localStorage.setItem('netflix-clone-profiles', JSON.stringify(items));
  }
  //Adds the new profile to the array of profiles and displays it and resets the profile name
  function createProfile(){
    if(profileName != ""){
      myProfiles[isIndex] = [profileName, rooster];
      setProfileName("");
    }
    saveToLocal(myProfiles);
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

  useEffect(() => {
   const data = window.localStorage.getItem('netflix-clone-profiles');
   console.log('data', data)
  }, [])
  return (
    //Provides the other modals woth the various useStates to exchange the profile information
    <openContext.Provider value={{  deleteProfile: [ deleteProfile, setDelete ], profiles: myProfiles[profileIndex], nameUpdate: [ updatedName, setUpdate ], showEditModal: [ showEdit, setShowEdit ], edit: [ iseditOpen, setEditOpen ], i:[ isIndex, setIndex ], addProfileOpen: [ isAddOpen, setAddOpen ], getName: [profileName, setProfileName] }} >
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ delay: 2 }}
    >
      <div className={classes.watchingLogo}>
          <img className={classes.img} src={logo} />
          
      </div>
      <motion.button
          whileHover={{ backgroundColor:"rgba(255, 255, 255, 0.219)" }}
          whileTap={{
            scale: 0.9,
          }}
          initial={{ scale: 1, backgroundColor: '#40424a' }}
          className={classes.buttonTop}
          style={{ marginTop: "2rem", gridArea: "manageProfile" }}
          onClick={() => setEditOpen(!iseditOpen)}
        >
          EDIT PROFILES
        </motion.button>
      <EditProfile name={myProfiles[profileIndex]} update={updateName()} remove={removeProfile()} />
      <motion.div
        className={classes.content}
        style={{
          marginTop: "-3rem",
          gridTemplateAreas: '"watchTitle" "profiles" "manageProfile "',
        }}
      >
        
        
            <NewProfile pics={profilePictures} create={createProfile()} />
            
        
        <p className={classes.watchTitle}>Who's Watching?</p>
        <motion.div
          className={classes.profileContainer}
        > 
            {myProfiles.map((profile, index) => ( <div onClick={() => iseditOpen ? (setShowEdit(!showEdit), setpIndex(index), console.log(myProfiles[index][0])) : (setLibraryOpen(!isLibraryOpen), setIsCurrent(index), console.log(isCurrent) ) } ><Profile key={keyGenerator()} name={profile[0]} img={profile[1]} /></div> ))}
          <motion.div className={classes.profiles} onClick={() => setAddOpen(!isAddOpen)} >
            <motion.div
                
                whileHover={{ scale: 1.03 }}
                onHoverStart={() => setHover(true)}
                onHoverEnd={() => setHover(false)}
                transition={{ ease: "easeIn", duration: '.2' }}
                className={classes.pic}
            >
              <motion.div animate={ isHover ? {opacity: 1} : ""} initial={{opacity: 0}} className={classes.overlayAdd}></motion.div>
                <motion.img className={classes.img} src={addBtn} />
            </motion.div>
            <p
                className={classes.profileName}
                style={{ color: "white" }}
            >
                Add Profile
            </p>
            </motion.div>
        </motion.div>
        
      </motion.div>
    </motion.div>
    </openContext.Provider>
  );
}

export default Watching;
