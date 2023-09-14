import React, { useState } from "react";
import WorkEx from "./workEx";
import Carousel from "./carousel";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const KnowMore = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="pb-10 md:pb-0">
      <AnimatePresence>
        {showDetails && (
          <>
            <section id="workEx" className="flex py-20 md:h-screen w-full flex-col items-center justify-center">
              <WorkEx />
            </section>
            <section className="flex w-full flex-col items-center justify-evenly">
              <Carousel />
              <div className="knowMore_section w-full">
                <Link
                  href="#profile"
                  className={`knowMore ${showDetails ? "block" : "hidden"}`}
                  onClick={toggleDetails}
                >
                  {showDetails ? "Let's get back " : "Explore Further "}
                </Link>
              </div>
            </section>
          </>
        )}
      </AnimatePresence>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInAnimation}
        className="knowMore_section"
      >
        {!showDetails && (
          <Link
            href="#workEx"
            className="knowMore"
            onClick={toggleDetails}
          >
            {showDetails ? "Let's get back" : "Explore Further"}
          </Link>
        )}
      </motion.div>
      <div ref={ref} style={{ height: "1px", width: "1px" }}></div>
    </div>
  );
};

export default KnowMore;
