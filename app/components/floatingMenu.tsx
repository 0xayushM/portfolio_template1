import React, { useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import SocialMediaIcons from "./socialMediaIcons";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
const FloatingButton = () => {
  const [iconsVisible, setIconsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleIcons = () => {
    setIconsVisible(!iconsVisible);
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInAnimation}
        className="knowMore_section"
      >
        <AnimatePresence>
          <div
            className={`floating-button ${iconsVisible ? "active" : ""}`}
            onClick={toggleIcons}
          >
            <FaShareAlt />
            {iconsVisible && <SocialMediaIcons />}
          </div>
        </AnimatePresence>
      </motion.div>
      <div ref={ref} style={{ height: "1px", width: "1px" }}></div>
    </>
  );
};

export default FloatingButton;
