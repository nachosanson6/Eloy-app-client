import React from "react";
import "./PhotoModal.css";

const PhotoModal = ({ show, onClose, imageUrl }) => {
    if (!show) return null;

    return (
        <div className="photoModal">
            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <img src={imageUrl} alt="" />
                    <div className="closeButton">
                        <span className="close" onClick={onClose}>X</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoModal;