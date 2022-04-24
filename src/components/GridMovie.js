import classes from "./Library.module.css";
import { motion } from "framer-motion";
import { libraryCOntext } from "./Library";
import { useContext } from "react";
import React, { useEffect, useRef, useState } from "react";
import { movieListCOntext } from "./MovieList";
import Axios from "axios";
import Details from "./Details";
import { searchContext } from "./Search";

function GridMovie(props){
    const { getCurrentID } = useContext(searchContext);
    const [ sentID, setID ] = getCurrentID
    const [ isHover, setHover ] = useState(false);
    const [ logo, setLogo ] = useState("");
    const api = "7356d2d9725d814bead78c81a80a56f9";
    const id = props.movieInfo.id;

    return(
        
        <motion.div 
            className={classes.searchHorz} 
            onHoverStart={() => setHover(!isHover) }
            onHoverEnd={() => setHover(!isHover) }
            whileHover={{scale: 1.04}}
            onClick={() => (props.hide(true)) (setID(id))}
            transition={{ ease: "easeIn", duration: '.2' }}
             >
                <img  className={classes.poster} src={ props.land ? "http://image.tmdb.org/t/p/w780/" + props.movieInfo.backdrop_path : "http://image.tmdb.org/t/p/w780/" + props.movieInfo.poster_path }  />
       
        </motion.div>
    )
}
export default GridMovie;