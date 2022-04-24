import classes from "./Library.module.css";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import moonbanner from "../img/moonbanner.png"
import moonlogo from "../img/moonlogo.png"
import { useAnimation } from 'framer-motion';

function Slides(){
    const [ isHover, setHover] = useState(false);
    const bannerAnim = useAnimation();
    const logoAnim = useAnimation();
    const text = useAnimation();
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              bannerAnim.start({
                opacity: 1,
              });
              logoAnim.start({
                opacity: 1,
                translateX: '5%',
              });
              text.start({
                opacity: 1,
              });
            }
            if(!(entry.isIntersecting)) {
                bannerAnim.start({
                    opacity: .5,
                });
                logoAnim.start({
                    opacity: 0,
                    translateX: '-5%',
                  });
                  text.start({
                    opacity: 0,
                  });
            }
          },
          {
            threshold: 0.9,
          }
        );
        if (ref.current) {
          observer.observe(ref.current);
        }
      }, [ref]);
      

    return(
        <motion.div className={classes.slides} 
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        animate={bannerAnim}
        ref={ref}
        transition={{ ease: "easeIn", duration: '.2' }}
        style={{ opacity: .5 }}
        initial={{ opacity: .5 }}
        >
            <motion.div animate={ isHover ? {opacity: 1} : ""} initial={{opacity: 0}} className={classes.overlaysP} ></motion.div>
            <motion.p animate={text} transition={{ ease: "easeIn", delay: 2}} initial={{opacity: 0}} className={classes.slideText} >New Episodes Strewming Wednesday</motion.p>
            <motion.img transition={{ ease: "easeIn"}} initial={{opacity: 0}} animate={logoAnim} className={classes.slideLogo} src={moonlogo} />
            <img className={classes.poster} src={moonbanner} />
        </motion.div>
    )
}

export default Slides; 