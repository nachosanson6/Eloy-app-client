import React, { useState } from "react";
import "./Carousel.css";
import MaximiseIcon from './../../images/maximise.svg'
import { Modal } from "react-bootstrap";
import PhotoModal from "../PhotoModal/PhotoModal";


const Carousel = ({ photos }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const filteredPhotos = photos.filter(image => image);
    const [showPhotoModal, setShowPhotoModal] = useState(false);


    const selectImage = (index) => {
        setSelectedImageIndex(index);
    };

    const openModal = () => {
        setShowPhotoModal(true);
    };

    const closeModal = () => {
        setShowPhotoModal(false);
    };

    // Renderizar solo una imagen si hay solo una foto en el array
    if (filteredPhotos.length === 1) {
        return (
            <div id="carouselFrame">
                <div className="imageFrame">
                    <img
                        className="image"
                        src={filteredPhotos[0]} // Renderiza la única foto
                        alt="Imagen"
                    />
                    <img className='icon' src={MaximiseIcon} onClick={openModal} alt="" />
                </div>
                <PhotoModal
                    show={showPhotoModal}
                    onClose={closeModal}
                    imageUrl={filteredPhotos[0]}
                />
            </div>

        );
    } else {

        // Renderizar el carousel completo si hay más de una foto
        return (
            <div id="carouselFrame">
                <div className="imageFrame">
                    <img
                        className="image"
                        src={photos[selectedImageIndex]}
                        alt={`Imagen ${selectedImageIndex + 1}`}
                    />
                    <img className='icon' src={MaximiseIcon} onClick={openModal} alt="" />
                </div>
                <PhotoModal
                    show={showPhotoModal}
                    onClose={closeModal}
                    imageUrl={photos[selectedImageIndex]}
                />
                <div className="thumbnails-container">
                    {photos.map((image, index) => (
                        <img
                            key={index}
                            className={`thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => selectImage(index)}
                        />
                    ))}
                </div>

            </div>

        )
    }


};

export default Carousel;
