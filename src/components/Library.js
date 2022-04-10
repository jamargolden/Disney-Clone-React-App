import logo from "../img/logo.png";
import classes from "./Library.module.css";
import { motion } from "framer-motion";
import { myProfiles } from "./Watching";
import React, { useEffect, useRef, useState } from "react";
import MovieList from "./MovieList";

function Library(props){

    const [ movies, setMovie ] = useState([
    {
        "Title": "Star Wars: Episode V - The Empire Strikes Back",
        "Year": "1980",
        "imdbID": "tt0080684",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "1983",
        "imdbID": "tt0086190",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode VII - The Force Awakens",
        "Year": "2015",
        "imdbID": "tt2488496",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
    },
    {
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "1983",
        "imdbID": "tt0086190",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    },{
        "Title": "Star Wars: Episode VI - Return of the Jedi",
        "Year": "1983",
        "imdbID": "tt0086190",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }]);
    return(
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={classes.libraryContent} >
            <div className={classes.navigation}>
                <div style={{display: 'flex', width: "75%", height: "100%", marginLeft: "2rem"}}>
                <div className={classes.libraryLogo}>
                    <img className={classes.img} src={logo} />
                </div>
                <ul className={classes.navLinks} >
                    <li className={classes.links} >Home</li>
                    <li className={classes.links} >TV Shows</li>
                    <li className={classes.links} >Movies</li>
                    <li className={classes.links} >New & Popular</li>
                    <li className={classes.links} >My List</li>
                </ul>
                </div>
                
                <div className={classes.navLinksRight} >
                    <p className={classes.linkRight} >DVD</p>
                    <div className={classes.pic} >
                        <img src={props.proflie} className={classes.img}  />
                    </div>
                </div>
            </div>
            <div className={classes.horizontalScroll} >
                <MovieList movies={movies} />
            </div>
        </motion.div>
    )
}

export default Library;