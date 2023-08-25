import React, { useState } from 'react'
import WorkEx from './workEx';
import Carousel from './carousel'

const KnowMore = () => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
      setShowDetails(!showDetails);
    };
  
    return (
      <div className='pb-10'>
        {showDetails && (
          <div>
            <WorkEx />
            <Carousel />
          </div>
        )}
        <div className='knowMore_section'>
        <button
          className='knowMore'
          onClick={toggleDetails}
        >
          {showDetails ? 'Hide Details' : 'Know More'}
        </button>
        </div>
      </div>
    );
}

export default KnowMore
