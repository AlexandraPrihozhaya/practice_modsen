import { useEffect, useState, useContext } from "react";
import { AppContext } from "../components/Provider";

export const useLocation = () => {

  const [userLocation, setUserLocation] = useState([]);
  const [error, setError] = useState("");
  // @ts-expect-error TS(2339): Property 'searchAddress' does not exist on type '{... Remove this comment to see the full error message
  const { searchAddress } = useContext(AppContext);

  useEffect(() => {
    if (searchAddress) {
        getCoordinates();
    } else {
        getUserLocation();
    }
  }, [searchAddress]);

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
          if (searchAddress) {
            const response = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=e5c73b1e-041d-49f0-b6d3-c96913f230d3&format=json&geocode=${searchAddress}`);
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