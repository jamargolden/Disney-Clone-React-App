import classes from "./Library.module.css";
import { motion } from "framer-motion";

function MovieList(props){
    return(
        <>
            {props.movies.map((movie, index) => <motion.div transition={{ ease: "easeIn" }}
                whileHover={{ border: "solid .1rem white", scale: "1.25" }} className={classes.posterHorz} >
                <motion.img className={classes.poster} src={movie.Poster} alt="Movie" />
            </motion.div>)}
        </>
    )
}

export default MovieList;