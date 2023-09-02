import React from 'react';
import { IconContext } from 'react-icons';
import socialMediaData from '../data/socialData.json'; 
import * as ReactIcons from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SocialMediaIcons = () => {
  const iconAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="social-media-icons">
      {socialMediaData.map((item, index) => {
        const IconComponent = ReactIcons[item.component as keyof typeof ReactIcons];
        
        if (IconComponent) {
          return (
            <Link key={index} href={item.profileLink} target="_blank" rel="noopener noreferrer">
              <motion.div
                className="icon-container"
                initial="hidden"
                animate="visible"
                variants={iconAnimation}
              >
                <IconContext.Provider value={{ size: '2em' }}>
                  <motion.div
                    className="icon"
                    whileHover={{ scale: 1.2 }}
                  >
                    <IconComponent />
                  </motion.div>
                </IconContext.Provider>
              </motion.div>
            </Link>
          );
        }
      })}
    </div>
  );
};

export default SocialMediaIcons;
