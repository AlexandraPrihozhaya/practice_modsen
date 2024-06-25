import React, { useEffect, useState, useContext } from "react"
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps'
import { AppContext } from '../Provider';
import vector from '@assets/Vector.png';
import { useLocation } from "../../hooks/useLocation";
import { useAuth } from "../../hooks/useAuth";


const containerStyle = {
    width: '100vw',
    height: '100vh',
    position: 'absolute'
};

const MyMap = () => {

    // @ts-expect-error TS(2339): Property 'searchAddress' does not exist on type '{... Remove this comment to see the full error message
    const { radius } = useContext(AppContext);
    const [attractions, setAttractions] = useState([]);
    const {userLocation, error} = useLocation()
    const {isAuth, email} = useAuth();

    useEffect(() => {
        if (radius != '' && userLocation.length != 0) {
            fetchAttractions();
        }
    }, [radius, userLocation]);

    const fetchAttractions = async () => {
    try {
        let r = radius * 1000;
        const response = await fetch(`https://search-maps.yandex.ru/v1/?text=архитектура&type=biz&lang=ru_RU&apikey=d2060b7e-ca8e-42ff-963a-3da7497a2f25&rspn=1&ll=${userLocation[1]},${userLocation[0]}&spn=${r / 6371*360*2},${r / 6371*360*2}&results=100`);
        const data = await response.json();
        setAttractions(data.features);    
    } catch (error) {
        console.error("Error fetching attractions:", error);
        }
    };

    return (
        <YMaps>
            <Map
                state={{
                    
                    center: userLocation,
                    zoom: 16,
                    // @ts-expect-error TS(2322): Type '{ center: any; zoom: number; on: { userLocat... Remove this comment to see the full error message
                    on: {
                        userLocationChange: (event) => {
                            // @ts-expect-error TS(2532): Object is possibly 'undefined'
                            this.setState({ center: event.value });
                        },
                    },
                }}
                // @ts-expect-error TS(2322): Type '{ width: string; height: string; position: s... Remove this comment to see the full error message
                    style={containerStyle} >

                {userLocation && isAuth && (
                    <Placemark
                        geometry={userLocation}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: vector,
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

                {attractions.map((cafe) => (
                    <Placemark
                        key={cafe.id}
                        geometry={[cafe.geometry.coordinates[1], cafe.geometry.coordinates[0]]} 
                        options={{
                        iconLayout: 'default#image',
                        iconImageHref: 'https://pngicon.ru/file/uploads/vinni-pukh-v-png.png', 
                        iconImageSize: [32, 24],
                        }}
                    />
                ))}
            </Map>
        </YMaps>
    )
}

export default MyMap