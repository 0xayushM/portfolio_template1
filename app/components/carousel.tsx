import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import carouselData from '../data/carouselData.json';
import Image from 'next/image';

const ImgSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className='section'>
      <Carousel {...settings}>
        {carouselData.map((imageUrl, index) => (
          <Wrap key={index}>
            <a>
              <div className='image-container'>
                <Image src={imageUrl} alt={`Slide ${index + 1}`} layout='fill' objectFit='cover' />
              </div>
            </a>
          </Wrap>
        ))}
      </Carousel>
    </div>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  a {
    border-radius: 6px;
    cursor: pointer;
    display: block;
    position: relative;
  }

  .image-container {
    position: relative;
    width: 100%;
    border: 20px solid rgba(0, 0, 0, 0);
    height: 60vh; /* Adjust the desired height */
  }

  &:hover {
    padding: 0;
    transition: 100ms;
  }

`;

export default ImgSlider;
