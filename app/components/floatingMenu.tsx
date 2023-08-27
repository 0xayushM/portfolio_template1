import React, { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import SocialMediaIcons from './socialMediaIcons'; 

const FloatingButton = () => {
  const [iconsVisible, setIconsVisible] = useState(false);

  const toggleIcons = () => {
    setIconsVisible(!iconsVisible);
  };

  return (
    <div className={`floating-button ${iconsVisible ? 'active' : ''}`} onClick={toggleIcons}>
      <FaShareAlt />
      {iconsVisible && <SocialMediaIcons />}
    </div>
  );
};

export default FloatingButton;
