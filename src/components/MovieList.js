import classes from "./Library.module.css";
import { motion } from "framer-motion";
import { libraryCOntext } from "./Library";
import { useContext } from "react";
import React, { useEffect, useRef, useState } from "react";
import Movie from "./Movie";
import { createContext } from "react";
import arrow from "../img/arrow.png"

export const movieListCOntext = createContext(false);

function MovieList(props){
    const api = "7356d2d9725d814bead78c81a80a56f9";
    const { movieHover, title } = useContext(libraryCOntext);
    const [ isHover, setHover ] = movieHover;
    const [ isMenu, setMenu ] = useState(false);
    const [ pageindex, setIndex ] = useState(0);

    function pageRight(){
        if(pageindex < 4){
            setIndex(pageindex + 1);
        }
    }
    function pageLeft(){
        if(pageindex > 0){
            setIndex(pageindex - 1);
        }
    }
    return(
        <>
            <div className={classes.controls} > 
                <motion.div onClick={() => pageLeft()} whileHover={{ opacity: 1 }} initial={{ opacity: 0 }} className={classes.right} >
                    <img src={arrow} className={classes.arrow} style={{ transform: 'scaleX(-1)' }} />
                </motion.div>
                <motion.div onClick={() => pageRight()} whileHover={{ opacity: 1 }} initial={{ opacity: 0 }} className={classes.right} >
                    <img src={arrow} className={classes.arrow} />
                </motion.div>
            </div>
            <div className={classes.bar} ></div>
            {props.movies.map((movie, index) => <movieListCOntext.Provider value={{page: [ pageindex, setIndex ]}} ><Movie movieInfo={movie} page={index} land={props.landscape} /></movieListCOntext.Provider>)}
        </>
    )
}

export default MovieList;