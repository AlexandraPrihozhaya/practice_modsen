import React from "react";

const PhotoItem = ({ photo }) => {
    return (
        <div className="photo-item">
            <img className="photo600" src={photo.url} alt={photo.title} />
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <h3>{photo.title}</h3>
        </div>
    );
};

export default PhotoItem;