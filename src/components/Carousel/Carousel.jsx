import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Carousel.css';

const Carousel = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };



  return (
    <div className="carousel">
      <button onClick={prevSlide}>Previous</button>
      <div className="slide-container">
        {photos.map((image, index) => (
            <>
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image}  alt={`Slide ${index + 1}`} />
          </div>
          </>
        ))}
        
      </div>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default Carousel;
