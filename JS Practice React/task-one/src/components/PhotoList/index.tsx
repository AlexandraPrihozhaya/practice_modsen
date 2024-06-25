import React from "react";
import PhotoItem from "../PhotoItem";
import { photos } from "../../constants/photos";

const PhotoList = () => {
    return (
        <div className="photo-list">
            {photos.map((photo) => (
                <PhotoItem key={photo.id} photo={photo} />
            ))}
      </div>
    );
};

export default PhotoList;