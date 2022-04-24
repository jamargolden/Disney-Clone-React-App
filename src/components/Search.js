import classes from "./Library.module.css";
import { motion } from "framer-motion";
import Axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import GridList from "./GridList";
import { createContext } from "react";
import Details from "./Details";

export const searchContext = createContext(false);

function Search() {
  const [query, setQuery] = useState("t");
  const [results, setResults] = useState([]);
  const [hideSearch, setHide] = useState(false);
  const api = "7356d2d9725d814bead78c81a80a56f9";
  const [selectedID, getId] = useState("");
  const [ currentLogo, setLogo ] = useState("");
  const [ currentInfo, setInfo ] = useState("")

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${api}&query=${query}`
    )
      .then((response) => {
        setResults(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        console.log("error");
      });
  }, [query]);

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
  return (
    <searchContext.Provider value={{ hideSBar: [hideSearch, setHide], getCurrentID: [selectedID, getId] }}>
      { !hideSearch ? "" : <Details exit={setHide} info={currentInfo} logo={currentLogo} /> }
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className={classes.search}>
        <input
          className={classes.searchBar}
          type="search"
          style={hideSearch ? { opacity: 0 } : { opacity: 1 }}
          placeholder="Search by title, character, or genre"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <p className={classes.carouselTitle}>Recommended For You</p>
        <div className={classes.gridView}>
          
          <GridList
            movies={results}
            landscape={true}
            hide={setHide}
            getId={getId}
          />
        </div>
      </motion.div>
    </searchContext.Provider>
  );
}

export default Search;
