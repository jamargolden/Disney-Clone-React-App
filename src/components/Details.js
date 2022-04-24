import classes from "./Library.module.css";
import { motion } from "framer-motion";
import close from "../img/close.png"
import { libraryCOntext } from "./Library";
import { useContext } from "react";
import React, { useEffect, useRef, useState } from "react";
import { searchContext } from "./Search";

function Details(props){
    const { detailOpen } = useContext(libraryCOntext);
    const [ libOpen, setLibOpen ] = detailOpen;


    return(
        <div className={classes.details} >
            <div className={classes.detailCont} >
                <div style={{ position: 'fixed', width: '100%', top: '11.5%', left: '2rem', marginTop: '2rem' }} >
                    <img src={close} onClick={() => props.exit(false)  } style={{ objectFit: 'contain' }} />
                </div>
                <img className={classes.detailLogo} src={ "http://image.tmdb.org/t/p/w780/" + props.logo } />
                <p className={classes.smallDetails} >{props.info.release_date} • {props.info.runtime}min </p>
                <div style={{ height: '10%', display: 'flex', marginBottom: '5rem', alignItems: 'center' }} >
                    <motion.button whileHover={{ opacity: .5 }} className={classes.playBtn} >PLAY</motion.button>
                    <motion.button whileHover={{ opacity: .5 }} className={classes.playBtn} style={{ backgroundColor: 'rgba(44, 44, 44, 0.534)', border: 'white .2rem solid', color: 'white' }} >TRAILER</motion.button>
                    <motion.div whileHover={{ backgroundColor: 'white' }} transition={{ ease: 'easeIn' }} className={classes.circleBtn} ></motion.div>
                    <motion.div whileHover={{ backgroundColor: 'white' }} transition={{ ease: 'easeIn' }} className={classes.circleBtn} ></motion.div>
                </div>
                
                <p className={classes.overview} >{props.info.overview}</p>
            </div>
            <div className={classes.detailBackdrop} >
                <div className={classes.detailOverlay} ></div>
                <img className={classes.dBackdrop} src={"http://image.tmdb.org/t/p/w1280/" + props.info.backdrop_path}/>
            </div>
        </div>
    )
}
export default Details;