import React, { useEffect, useState, useRef } from "react";
import Loading from "../Loading/Loading";
import "./SelectecProductsCarousel.css";
import allProductsService from "../../services/allProducts.services";
import { Link } from "react-router-dom";

const SelectecProductsCarousel = ({ photos, areDetails }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainImageRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);


  const imagesPerPage =
    window.innerWidth >= 768 ? 4 : window.innerWidth >= 480 ? 3 : 2;

  const showImages = (startIndex) => {
    const endIndex = Math.min(startIndex + imagesPerPage, photos.length);
    setCurrentIndex(startIndex);
  };

  const nextImages = () => {
    if (!isZoomed) {
      const nextIndex = (currentIndex + imagesPerPage) % photos.length;
      showImages(nextIndex);
    }
  };

  const prevImages = () => {
    const prevIndex =
      (currentIndex - imagesPerPage + photos.length) % photos.length;
    showImages(prevIndex);
  };


  if (!photos) {
    return <Loading />;
  }

  console.log(photos)

  return (
    <>
      <div id="carousel-container" >
        {areDetails ?
          <h3 className="selectedProduct">Tambien te puede interesar</h3>
          :
          <h3 className="selectedProduct">Obras destacadas</h3>
        }
        <div id="main-image-container">
          {photos.slice(currentIndex, currentIndex + imagesPerPage).map((image, i) => (
            <Link to={`/productDetails/${image._id}`} key={i}>
              <div
                className={`carousel-image-container ${i === 0 ? 'active' : ''}`}

              >
                <img
                  className="carousel-image"
                  src={image.photo}
                  alt={`Imagen ${currentIndex + i + 1}`}
                />
                <div className="chip">
                  {image.sold ? 'Vendido' :
                    image.product === 'Pictures' ? 'Pintura' :
                      image.product === 'Sculptures' ? 'Escultura' :
                        image.product === 'Jewelry' ? 'Bisutería' : 'Otro'}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="buttons">
          <button id="prev-btn" className="nav-btn" onClick={prevImages}>
            &lt;
          </button>
          <button id="next-btn" className="nav-btn" onClick={nextImages}>
            &gt;
          </button>
        </div>


      </div>

    </>
  );
};

export default SelectecProductsCarousel;
