import React, { useState } from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import carouselData from '../data/carouselData.json';
import Image from 'next/image';

const ImgSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current: any, next: React.SetStateAction<number>) => setActiveIndex(next),
    afterChange: () => {},
  };

  return (
    <div className='section'>
      <div className='car_section'>
      <div className='carousel_section'>
      <Carousel {...settings}>
        {carouselData.map((imageUrl, index) => (
          <Wrap key={index} isActive = {index === activeIndex}>
            <a>
              <div className='image-container'>
                <Image src={imageUrl} alt={`Slide ${index + 1}`} layout='fill' objectFit='cover' />
              </div>
            </a>
          </Wrap>
        ))}
      </Carousel>
    </div>
    </div>
    </div>
  );
};

const Carousel = styled(Slider)`
    margin-top: 20px;
    & > button {
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1 ;

        &:hover {
            opacity:1;
            transition: opacity 0.2s ease 0s; 
        }
    }
    
    ul li button {
        &:before {
            font-size:10px;
            color:rgb(150,158,171);
        }
    }
    li.slick-active button:before {
        color:white;
    }
    .slick-list{
        overflow:initial;
    }
    .slick-prev{
        left:-100px;
    }
    .slick-next{
        right:-100px;
    }
`
const Wrap = styled.div<{isActive:boolean}>`
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  border-bottom: 40px solid transparent;

  a {
    border-radius: 6px;
    cursor: pointer;
    display: block;
    position: relative;
  }

  .image-container {
    position: relative;
    width: 100%;
    border-radius: 10px;
    height: 60vh; 
    transform: scale(${props => (props.isActive ? '1.1' : '1')});
    transition: transform 0.3s ease;
    ${props =>
      props.isActive &&
      `
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 1);
      z-index:2;
    `}
  }

  &:hover {
    padding: 0;
    transition: 100ms;
  }

`;

export default ImgSlider;
