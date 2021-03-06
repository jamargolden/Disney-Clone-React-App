import { motion } from "framer-motion";
import classes from "./App.module.css";
import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { openContext } from "./Watching";
import editIcon from "../img/editprofile.png"

const myProfiles = [];

function Profile(props) {
  const [isHover, setHover] = useState(false);
  const { addProfileOpen, edit, showEditModal } = useContext(openContext)
  const [isOpen, setOpen] = addProfileOpen;
  const [ iseditOpen, setEditOpen ] = edit
  const [ showEdit, setShowEdit ] = showEditModal;

  return (
    
    <motion.div className={classes.profiles} > 
      <motion.div
        transition={{ ease: "easeIn" }}
        whileHover={{ scale: 1.03 }}
        onHoverStart={() => setHover(!isHover)}
        onHoverEnd={() => setHover(!isHover)}
        className={classes.pic}
        style={{backgroundImage: `url(${props.img})`}}
      >
        <motion.div animate={ isHover ? {opacity: 1} : ""} initial={{opacity: 0}} className={classes.overlay}></motion.div>
        <motion.img animate={iseditOpen ? {opacity: 1}: ""} initial={{opacity: 0}} className={classes.imgOverlay} src={editIcon} />
        <motion.img style={{zIndex: 0}} className={classes.img} src={props.img} />
      </motion.div>
      <p
        className={classes.profileName}
        style={{ color: "white" }}
      >
        {props.name}
      </p>
    </motion.div>
  );
}

export default Profile;
