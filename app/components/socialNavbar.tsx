import React from 'react';
import socialMediaData from '../data/socialData.json';
import { IconContext } from 'react-icons';
import * as ReactIcons from 'react-icons/fa';

const SocialNavbar = () => {
  return (
    <div className="social-navbar">
      {socialMediaData.map((item, index) => {
        const IconComponent = ReactIcons[item.component as keyof typeof ReactIcons];
        
        if (IconComponent) {
          return (
            <a key={index} href={item.profileLink} target="_blank" rel="noopener noreferrer">
              <IconContext.Provider value={{ size: '2em' }}>
                <IconComponent />
              </IconContext.Provider>
            </a>
          );
        }

        return null;
      })}
    </div>
  );
};

export default SocialNavbar;
