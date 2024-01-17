import { useEffect, useState } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import Loading from "../Loading/Loading";
import allProductsService from "../../services/allProducts.services";
import "./Carousel.css"

const CarouselComponent = ({photos}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const showImage = (index) => {
    setCurrentIndex(index);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

    if (!photos) {
      return (
          <Loading />
      )
  }
  return(
    <div id="carousel-container" >
      <div id="nav-container">
      <button id="prev-btn" className="nav-btn" onClick={prevImage}>&lt;</button>
     
    <img id="main-image" src={photos[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
    <button id="next-btn" className="nav-btn" onClick={nextImage}>&gt;</button>
      </div>
    <div id="thumbnail-container">
        {photos.map((image, i) => (
          <div
            key={i}
            className={`thumbnail ${i === currentIndex ? 'active' : ''}`}
            onClick={() => showImage(i)}
          >
            <img src={image} alt={`Thumbnail ${i + 1}`} />
          </div>
        ))}
      </div>
      
  </div>
  )
}
export default CarouselComponent