import { motion } from "framer-motion";
import classes from "./App.module.css";
import { createContext, useState } from "react";
import { useContext } from "react";
import { openContext } from "./Watching";

function EditProfile(props) {
  const { showEditModal, nameUpdate, myProfiles, deleteProfile } = useContext(openContext);
  const [isOpen, setOpen] = showEditModal;
  const [ newName, setNewName ] = useState("")
  const [ update, setUpdate ] = nameUpdate;
  const [ deleteP, setDelete ] = deleteProfile;
  var p = myProfiles;

  return (
    <div>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={classes.content}
          style={{
            position: "fixed",
            backgroundColor: "rgb(15, 15, 15)",
            display: "flex",
            flexDirection: "column",
            zIndex: 5,
          }}>
              <p className={classes.watchTitle} style={{ marginBottom: '1rem' }}>Edit Profile</p>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className={classes.pic}>
                    <motion.img className={classes.img} src={props.name[1]} />
                </div>
                <input onChange={(e) => setNewName(e.target.value)} style={{ width: '35%', height: '3rem', marginLeft: '2rem', border: 'none', backgroundColor: 'rgb(73, 73, 73)' ,  paddingLeft: '1rem'}} type="text" placeholder={props.name[0]}></input>
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
                    onClick={() =>  { setOpen(!isOpen); setUpdate(newName)}}
                    
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
                    onClick={() => {setOpen(!isOpen); setDelete(!deleteP)}}
                    >
                    DELETE
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
          </motion.div>
      ) : (
        ""
      )}
    </div>
  );
}

export default EditProfile;
