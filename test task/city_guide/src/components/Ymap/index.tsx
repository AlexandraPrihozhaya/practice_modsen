import React, { useEffect, useState, useContext } from "react"
import { YMaps, Map, Placemark, Circle, RoutePanel } from '@pbe/react-yandex-maps'
import vector from '@assets/Vector.png';
import { useLocation } from "../../hooks/useLocation";
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const containerStyle = {
    width: '100vw',
    height: '100vh',
    position: 'absolute'
};

const API_KEY = "d2060b7e-ca8e-42ff-963a-3da7497a2f25";

const MyMap = () => {

    const [attractions, setAttractions] = useState([]);
    
    const {userLocation, error} = useLocation();
    const geoObjects = useAppSelector(state => state.geoObjectsReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetchAttractions();
    }, [geoObjects.radius, userLocation, geoObjects.selectedCategories, geoObjects.searchAddress]);

    const fetchAttractions = async () => {
        const response = await fetch(`https://api.routing.yandex.net/v2/route?waypoints=25.234369457896325,55.280222457968712|25.234369457896325,55.401544758961258&mode=walking&apikey=96cda7f7-b384-479b-a403-7d6fbd8d95c2`);
        const data = await response.json();
        console.log(data)
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

                {userLocation && (
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
                    geometry={[userLocation, geoObjects.radius * 1000]}
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
                    geometry={[userLocation, geoObjects.radius * 100]}
                    options={{
                        draggable: false,
                        fillColor: "#5E7BC7",
                        fillOpacity: 0.2,
                        strokeWidth: 0
                    }}
                />

                {attractions.map((place) => (
                    <Placemark
                        key={place.id}
                        geometry={[place.geometry.coordinates[1], place.geometry.coordinates[0]]} 
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