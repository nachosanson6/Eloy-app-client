import React from "react";
import "./PhotoModal.css";

const PhotoModal = ({ show, onClose, imageUrl }) => {
    if (!show) return null;
    console.log(imageUrl)
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>X</span>
                <img src={imageUrl} alt="" />
            </div>
        </div>
    );
};

export default PhotoModal;