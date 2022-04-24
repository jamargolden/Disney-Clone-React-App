import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import classes from "./Library.module.css";


function Collections(props){
    const [ isHover, setHover] = useState(false);

    return(
        <motion.div 
        className={classes.collection}
        whileHover={{scale: 1.04}}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        transition={{ ease: "easeIn", duration: '.2' }}
        >
            <motion.div animate={ isHover ? {opacity: 1} : ""} initial={{opacity: 0}} className={classes.overlays} ></motion.div>
            <img className={classes.collectIcon} src={props.icon} />
        </motion.div>
    )
}
export default Collections;