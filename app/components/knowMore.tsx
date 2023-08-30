import React, { useState } from "react";
import WorkEx from "./workEx";
import Carousel from "./carousel";
import Link from "next/link";

const KnowMore = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="pb-10 md:pb-0">
      {showDetails && (
        <>
          <section id="workEx">
            <WorkEx />
          </section>
          <section>
            <Carousel />
            <div className="knowMore_section">
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
      <div className="knowMore_section">
        {!showDetails && (
          <Link
          href="#workEx"
          className="knowMore"
          onClick={toggleDetails}
        >
          {showDetails ? "Let's get back" : "Explore Further"}
        </Link>
        )}
      </div>
    </div>
  );
};

export default KnowMore;
