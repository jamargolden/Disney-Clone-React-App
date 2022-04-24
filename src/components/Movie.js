import classes from "./Library.module.css";
import { motion } from "framer-motion";
import { libraryCOntext } from "./Library";
import { useContext } from "react";
import React, { useEffect, useRef, useState } from "react";
import { movieListCOntext } from "./MovieList";

function Movie(props){
    const [ isHover, setHover ] = useState(false);
    const { page } = useContext(movieListCOntext);
    const { contentID, detailOpen } = useContext(libraryCOntext);
    const [ id, setID ] = contentID;
    const [ pageindex, setIndex ] = page;
    const [ openD, setDOpen ] = detailOpen;

    return(
        
        <motion.div 
            className={classes.posterHorz} 
            onHoverStart={() => setHover(!isHover) }
            onHoverEnd={() => setHover(!isHover) }
            whileHover={{scale: 1.04}}
            animate={{ translateX: pageindex*(-420) + "%" }}
            onClick={() => (setID(props.movieInfo.id)) (setDOpen(!openD))}
            transition={{ ease: "easeIn", duration: '.2' }}
             ><motion.div animate={ isHover ? {opacity: 1} : ""} initial={{opacity: 0}} className={classes.overlaysP} ></motion.div>
                
                <img  className={classes.poster} src={ props.land ? "http://image.tmdb.org/t/p/w780/" + props.movieInfo.backdrop_path : "http://image.tmdb.org/t/p/w780/" + props.movieInfo.poster_path }  />
       
        </motion.div>
    )
}
export default Movie;