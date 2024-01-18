import React, { useEffect, useState, useRef } from "react";
import { Carousel } from "react-bootstrap";
import Loading from "../Loading/Loading";
import "./Carousel.css";

const CarouselComponent = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainImageRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const showImage = (index) => {
    setCurrentIndex(index);
  };

  const nextImage = () => {
    if (!isZoomed) {
      setCurrentIndex((currentIndex + 1) % photos.length);
    }
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  const handleZoom = () => {
    const mainImage = mainImageRef.current;
  
    if (mainImage) {
      if (mainImage.classList.contains('zoomed')) {
        mainImage.classList.remove('zoomed');
        setIsZoomed(false);
      } else {
        mainImage.classList.add('zoomed');
        setIsZoomed(true);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  if (!photos) {
    return <Loading />;
  }

  return (
    <div id="carousel-container">
      <div id="nav-container">
        <button id="prev-btn" className="nav-btn" onClick={prevImage}>
          &lt;
        </button>

        <img
          id="main-image"
          ref={mainImageRef}
          src={photos[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          onClick={handleZoom} 
        />

        <button id="next-btn" className="nav-btn" onClick={nextImage}>
          &gt;
        </button>
      </div>

      <div id="thumbnail-container">
        {photos.map((image, i) => (
          <div
            key={i}
            className={`thumbnail ${i === currentIndex ? "active" : ""}`}
            onClick={() => showImage(i)}
          >
            <img src={image} alt={`Thumbnail ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
