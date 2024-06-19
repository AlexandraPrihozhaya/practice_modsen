import React, { useEffect, useState, useContext } from "react"
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps'
import { AppContext } from '../provider/AppProvider';

const containerStyle = {
    width: '100vw',
    height: '100vh',
    position: 'absolute'
};

const MyMap = () => {

    // @ts-expect-error TS(2339): Property 'searchAddress' does not exist on type '{... Remove this comment to see the full error message
    const { searchAddress, radius } = useContext(AppContext);
    const [userLocation, setUserLocation] = useState({});

    useEffect(() => {
    if (searchAddress) {
        getCoordinates();
    } else {
        getUserLocation();
    }
    }, [searchAddress]);

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

    const getUserLocation = () => { 
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    setUserLocation([ latitude, longitude ]);
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        }
        else {
            console.error('Geolocation is not supported by this browser.');
        }
     };

    return (
        <YMaps>
            <Map
                state={{
                    // @ts-expect-error TS(2740): Type '{}' is missing the following properties from... Remove this comment to see the full error message
                    center: userLocation,
                    zoom: 16,
                    on: {
                        userLocationChange: (event) => {
                        // @ts-expect-error TS(2532): Object is possibly 'undefined'.
                            this.setState({ center: event.value });
                        },
                    },
                }}
                // @ts-expect-error TS(2322): Type '{ width: string; height: string; position: s... Remove this comment to see the full error message
                    style={containerStyle} >

                {userLocation && (
                    <Placemark
                        geometry={userLocation}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: 'https://i.ibb.co/r0QJ7QK/2.png',
                            iconImageSize: [32, 24],
                        }}
                    />
                )}
                <Circle
                    geometry={[userLocation, radius * 1000]}
                    options={{
                        draggable: false,
                        fillColor: "#5E7BC7",
                        fillOpacity: 0.1,
                        strokeColor: "#5E7BC7",
                        strokeOpacity: 0.2,
                        strokeWidth: 2
                    }}
                />
                <Circle
                    geometry={[userLocation, radius * 100]}
                    options={{
                        draggable: false,
                        fillColor: "#5E7BC7",
                        fillOpacity: 0.2,
                        strokeWidth: 0
                    }}
                />
            </Map>
        </YMaps>
    )
}

export default MyMap