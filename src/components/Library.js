import logo from "../img/logo.png";
import classes from "./Library.module.css";
import { motion } from "framer-motion";
import { myProfiles } from "./Watching";

function Library(props){

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
        </motion.div>
    )
}

export default Library;