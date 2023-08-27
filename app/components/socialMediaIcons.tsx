import React from 'react';
import { IconContext } from 'react-icons';
import socialMediaData from '../data/socialData.json'; 
import * as ReactIcons from 'react-icons/fa';


const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
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
    })}
    </div>
  );
};

export default SocialMediaIcons;
