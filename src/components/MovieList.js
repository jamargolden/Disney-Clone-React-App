import classes from "./Library.module.css";
import { motion } from "framer-motion";
import { libraryCOntext } from "./Library";
import { useContext } from "react";

function MovieList(props){

    const { movieHover } = useContext(libraryCOntext);
    const [ isHover, setHover ] = movieHover;

    return(
        <>
            {props.movies.map((movie, index) => <motion.div transition={{ ease: "easeIn" }}
                whileHover={{ border: "solid .1rem white", scale: "1.25" }} 
                className={classes.posterHorz} 
                onMouseOver={() => (setHover(movie.Poster), console.log(isHover) ) } >
                <motion.img className={classes.poster} src={movie.Poster} alt="Movie" />
            </motion.div>)}
        </>
    )
}

export default MovieList;