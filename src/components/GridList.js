import classes from "./Library.module.css";
import { motion } from "framer-motion";
import { libraryCOntext } from "./Library";
import { useContext } from "react";
import React, { useEffect, useRef, useState } from "react";
import GridMovie from "./GridMovie";

function GridList(props){
    const [ isHover, setHover ] = useState(false);

    return(
        <>
        {props.movies.map((movie, index) => <GridMovie id={props.getId} hide={props.hide} movieInfo={movie} land={props.landscape} /> )}
        </>
    )
}
export default GridList;