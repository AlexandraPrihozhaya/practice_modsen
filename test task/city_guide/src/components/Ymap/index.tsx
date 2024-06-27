import React, { useEffect, useState, useContext } from "react"
import { YMaps, Map, Placemark, Circle, RoutePanel } from '@pbe/react-yandex-maps'
import vector from '@assets/Vector.png';
import { useLocation } from "../../hooks/useLocation";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useYMaps } from "@pbe/react-yandex-maps";
import InfoCard from "../InfoCard";
import RouteCard from "../RouteCard";

const containerStyle = {
    width: '100vw',
    height: '100vh',
    position: 'absolute'
};

const API_KEY = "d2060b7e-ca8e-42ff-963a-3da7497a2f25";
const API_KEY_2 = "d6a05483-2ece-44c4-a5b8-5aa1031e577f"

const MyMap = () => {

    const {userLocation, error} = useLocation();
    const geoObjects = useAppSelector(state => state.geoObjectsReducer);
    const dispatch = useAppDispatch();
    const [obj, setObj] = useState([]);
    const [selectedPlace, setSelectedPlace] = useState(null);

    const handlePlacemarkClick = (place) => {
        setSelectedPlace(place);
    };

    useEffect(() => {
        if (geoObjects.radius !== 0 && userLocation && geoObjects.selectedCategories)
            getAttractions().then(attractions => setObj(attractions));
    }, [geoObjects.radius, userLocation, geoObjects.selectedCategories]);

    const getAttractions = async () => {
        let arr = [];
        for (let i = 0; i < geoObjects.selectedCategories.length; i++) {
            try {
                const radius = geoObjects.radius/111;
                const response = await fetch(`https://search-maps.yandex.ru/v1/?text=${geoObjects.selectedCategories[i].text}&type=biz&lang=ru_RU&apikey=${API_KEY_2}&rspn=1&spn=${radius},${radius}&ll=${userLocation[1]},${userLocation[0]}&results=100`);
                const data = await response.json();
                arr.push({ attractions : data.features, category: geoObjects.selectedCategories[i] }); 
            } catch (error) {
                console.error("Error fetching attractions:", error);
            }
        }

        return arr;
    }
                           
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
                
                {obj.length !== 0 && geoObjects.radius && obj.map((place) => (
                    place.attractions.map((attr) => (
                        <Placemark
                            key={attr.id}
                            geometry={[attr.geometry.coordinates[1], attr.geometry.coordinates[0]]} 
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: place.category.icon, 
                                iconImageSize: [32, 32]
                            }}
                            onClick={() => handlePlacemarkClick(attr)}
                        />
                    ))
                ))           
            } 
            {selectedPlace && obj.length && (
                <InfoCard object={selectedPlace} />
            )}
            
            </Map>
        </YMaps>
    )
}

export default MyMap