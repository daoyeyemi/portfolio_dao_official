import React from "react";
import NavBar from "../components/NavBar";
import Body from "../components/Body";
import AboutMe from "../components/AboutMe";
import "./styles.css";
import { motion } from "framer-motion";

function About() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="about">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 13
            }}>
            <NavBar />
          </div>
        <div
          style={{
            position: "absolute",
            top: 100,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 12
          }}>
            <AboutMe />
        </div>
        </motion.div>
    )
}

export default About;