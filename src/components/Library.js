import logo from "../img/disneylogo.png";
import classes from "./Library.module.css";
import { motion } from "framer-motion";
import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import MovieList from "./MovieList";
import { createContext } from "react";
import Collections from "./Collections";
import collectionIcon from "../img/disney.png";
import pixar from "../img/pixar.png";
import marvel from "../img/marvel.png";
import starwars from "../img/starwars.png"
import natgeo from "../img/natgeo.png"
import Slides from "./Slides";
import Search from "./Search";
import { useAnimation } from 'framer-motion';
import Details from "./Details";

export const libraryCOntext = createContext(false);

function Library(props){
    const api = "7356d2d9725d814bead78c81a80a56f9";
    const [ isMovieHover, setMovieHover ] = useState("");
    const [ titleName, setTitleName ] = useState("");
    const [ trending, setTrending ] = useState([])
    const [ recommend, setRec ] = useState([])
    const [ disAnim, setdisAnim ] = useState([]);
    const [ upcoming, setUpcoming ] = useState([]);
    const [ slide, setSlide ] = useState(false);
    const [ index, setIndex] = useState(0);
    const [ isSettingOpen, setSettingOpen ] = useState(false);
    const openSettings = useAnimation();
    const [selectedID, getId] = useState("");
    const [ openDetails, setDetailsOpen ] = useState(false);
    const [ currentInfo, setInfo ] = useState("")
    const [ currentLogo, setLogo ] = useState("");
    const [ openSearch, setSearch ] = useState(false);
    const [ openMovies, setMoviesOpen ] = useState(false);

    useEffect(() => {
        if (isSettingOpen === true){
            openSettings.start({
                scaleY: 1
            });
        }
        if (isSettingOpen === false){
            openSettings.start({
                scaleY: 0
            });
        }
    }, [isSettingOpen]);
 
    useEffect(() => {
        Axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${api}`
        )
        .then((response) => {
            setTrending(response.data.results);
            
        })
    }, []);

    useEffect(() => {
        Axios.get(
            `https://api.themoviedb.org/3/list/9387?api_key=${api}&language=en-US`
        )
        .then((response) => {
            setRec(response.data.items);
            
        })
    }, []);

    useEffect(() => {
        Axios.get(
            `https://api.themoviedb.org/3/list/5905?api_key=${api}&language=en-US`
        )
        .then((response) => {
            setdisAnim(response.data.items);
            
        })
    }, []);

    useEffect(() => {
        Axios.get(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1`
        )
        .then((response) => {
            setUpcoming(response.data.results);
            
        })
    }, []);
    
    useEffect(() => {
        const interval =  setInterval(() => {
            if(index >= 2){
                setIndex(0);
            }
            if(slide){
                setIndex(prevIndex => prevIndex + 1);
                setSlide(false);
                
            }
            else{
                setSlide(true);
            }
        }, 4000)
        return () => clearInterval(interval);
    });
    useEffect(() => {
        Axios.get(
          `http://api.themoviedb.org/3/movie/${selectedID}?api_key=${api}`
        )
          .then((response) => {
            setInfo(response.data)
            console.log(response.data.overview);
          })
          .catch((err) => {
            console.log("error");
          });
      }, [selectedID]);
      useEffect(() => {
        Axios.get(
          `http://api.themoviedb.org/3/movie/${selectedID}/images?api_key=${api}&language=en-US&append_to_response=images&include_image_language=null,en`
        )
          .then((response) => {
            setLogo(response.data.logos[0].file_path)
            console.log(response.data);
          })
          .catch((err) => {
            console.log("error");
          });
      }, [selectedID]);
    return(
        <libraryCOntext.Provider value={{ detailOpen: [ openDetails, setDetailsOpen ], contentID: [selectedID, getId], title: [ titleName, setTitleName ], movieHover: [isMovieHover, setMovieHover] }} >
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={classes.libraryContent} >
            <div className={classes.navigation}>
                <div style={{display: 'flex', width: "75%", height: "100%", marginLeft: "2rem"}}>
                <div className={classes.libraryLogo}>
                    <img className={classes.img} src={logo} />
                </div>
                <ul className={classes.navLinks} >
                    <li className={classes.links} onClick={() => setSearch(false)} >HOME</li>
                    <li className={classes.links} onClick={() => setSearch(true)} >SEARCH</li>
                    <li className={classes.links} >WATCHLIST</li>
                    <li className={classes.links} >ORIGINALS</li>
                    <li className={classes.links} >MOVIES</li>
                    <li className={classes.links} >SERIES</li>
                </ul>
                </div>
                
                <div className={classes.navLinksRight} >
                    <div className={classes.pic} >
                        <motion.img onHoverStart={() => setSettingOpen(!isSettingOpen) }  src={props.img} className={classes.img}  />
                    </div>
                    <motion.div animate={openSettings} transition={{ ease: "easeIn"}} initial={{ scaleY: 0 }} className={classes.settings}  onHoverEnd={() => setSettingOpen(!isSettingOpen) } ></motion.div>
                </div>
            </div>
            { openSearch ? <Search /> : "" }
            { !openDetails ? "" : <Details exit={setDetailsOpen} info={currentInfo} logo={currentLogo} /> }
            <div className={classes.slideshow} >
                <motion.div animate={{ translateX: index*-90 + '%' }} transition={{ease: "easeIn"}} initial={{ translateX: '-0%' }} className={classes.slider}>
                    <div className={classes.bar} ></div>
                    <Slides />
                    <Slides />
                    <Slides />
                </motion.div>
                
            </div>
            <div className={classes.hero} >
                <Collections icon={collectionIcon} />
                <Collections icon={pixar} />
                <Collections icon={marvel} />
                <Collections icon={starwars} />
                <Collections icon={natgeo} />
            </div>
            <div className={classes.carousel} >
                <p className={classes.carouselTitle} >Recommended For You</p>
                <div className={classes.horizontalScroll} >
                    <MovieList movies={recommend} landscape={true} />
                </div>
                <p className={classes.carouselTitle} >Trending</p>
                <div className={classes.horizontalScroll} >
                    <MovieList movies={trending} landscape={true} />
                </div>
                <p className={classes.carouselTitle} >Disney Animation</p>
                <div className={classes.horizontalScroll} >
                    <MovieList movies={disAnim} landscape={true} />
                </div>
                <p className={classes.carouselTitle} >Upcoming</p>
                <div className={classes.horizontalScroll} >
                    <MovieList movies={upcoming} landscape={false} />
                </div>
            </div>
            <div className={classes.back} >

            </div>
        </motion.div>
        </libraryCOntext.Provider>
    )
}

export default Library;