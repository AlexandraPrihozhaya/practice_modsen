import { useEffect, useState, useContext } from "react";
import { useAppDispatch, useAppSelector } from "./redux";

const API_KEY = "e5c73b1e-041d-49f0-b6d3-c96913f230d3";

export const useLocation = () => {

  const [userLocation, setUserLocation] = useState([]);
  const [error, setError] = useState("");

  const geoObjects = useAppSelector(state => state.geoObjectsReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (geoObjects.searchAddress) {
        getCoordinates();
    } else {
        getUserLocation();
    }
  }, [geoObjects.searchAddress]);

  const getUserLocation = () => {
    const handleSuccess = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setUserLocation([latitude, longitude]);
    }

    const handleError = (error) => {
        setError('Error getting user location:' + error);
    }

    if (!navigator.geolocation) {
        setError('Geolocation is not supported by this browser.');
        return;
    } else {
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  };
  
  const getCoordinates = async () => {
        try {
          if (geoObjects.searchAddress) {
            const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${API_KEY}&format=json&geocode=${geoObjects.searchAddress}`);
            const data = await response.json();
            const coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
            setUserLocation([parseFloat(coordinates[1]), parseFloat(coordinates[0])]);
          }
        } catch (error) {
          console.error('Error getting coordinates:', error);
        }
      };

  return { userLocation, error };
};