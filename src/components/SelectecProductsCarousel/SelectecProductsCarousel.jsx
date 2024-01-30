import React, { useEffect, useState, useRef } from "react";
import Loading from "../Loading/Loading";
import "./SelectecProductsCarousel.css";
import allProductsService from "../../services/allProducts.services";

const SelectecProductsCarousel = () => {
  const [photos, setPhotos] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0);
  const mainImageRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);


  useEffect(() => {
    loadPhotos()
  }, [])

  const loadPhotos = async () => {
    try {
      const { data } = await allProductsService.getAllPhotos();
      const shuffledPhotos = data.sort(() => Math.random() - 0.5);
      setPhotos(shuffledPhotos);
    } catch (error) {
      console.error("Error loading photos:", error);
    }
  };

  allProductsService
    .getAllPhotos()
    .then(({ data }) => console.log(data))
    .catch(err => console.log(err))

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



  // const handleZoom = () => {
  //   const mainImage = mainImageRef.current;

  //   if (mainImage) {
  //     if (mainImage.classList.contains('zoomed')) {
  //       mainImage.classList.remove('zoomed');
  //       setIsZoomed(false);
  //     } else {
  //       mainImage.classList.add('zoomed');
  //       setIsZoomed(true);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextImage();
  //   }, 5000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [currentIndex]);

  if (!photos) {
    return <Loading />;
  }

  return (
    <>
      <div id="carousel-container" >
        <div id="nav-container">
          <h3 className="selectedProduct">Obras destacadas</h3>
          <div id="main-image-container">
            {photos.slice(currentIndex, currentIndex + imagesPerPage).map((image, i) => (
              <div
                key={i}
                className={`carousel-image-container ${i === 0 ? 'active' : ''}`}
                onClick={() => showImage(i)}
              >
                <img
                  className="carousel-image"
                  src={image.photo}
                  alt={`Imagen ${currentIndex + i + 1}`}
                />
                <div className="chip">
                  {image.product === 'Pictures' ? 'Cuadro' :
                    image.product === 'Sculptures' ? 'Escultura' :
                      image.product === 'Jewelry' ? 'Joyería' : 'Otro'}
                </div>
              </div>
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

        {/* <div id="thumbnail-container">
        {photos.map((image, i) => (
          <div
            key={i}
            className={`thumbnail ${i === currentIndex ? "active" : ""}`}
            onClick={() => showImage(i)}
          >
            <img src={image} alt={`Thumbnail ${i + 1}`} />
          </div>
        ))}
      </div> */}
        <div className="verticalLine"></div>
      </div>

    </>
  );
};

export default SelectecProductsCarousel;
