import React, {useEffect, useState} from "react"
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps'

const containerStyle = {
    width: '100vw',
    height: '100vh',
    position: 'absolute'
};

const MyMap = () => {

    const [userLocation, setUserLocation] = useState({});

    useEffect(() => {
        getUserLocation();
    }, [])

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
                defaultState={{ center: userLocation, zoom: 15 }}
                style={containerStyle} >
                {userLocation && (
                    <Placemark
                        geometry={userLocation}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: 'https://ltdfoto.ru/images/2024/06/16/Vector.png',
                            iconImageSize: [32, 24],
                        }}
                    />
                )}
                <Circle
                    geometry={[userLocation, 1000]}
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
                    geometry={[userLocation, 100]}
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