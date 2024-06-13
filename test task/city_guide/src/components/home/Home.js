import React, {useContext, useState} from "react"
import { useLocation } from "react-router-dom"
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const containerStyle = {
    width: '100vw',
    height: '100vw'
};

const Home = () => {
  
    const [location, setLocation] = useState([53.96857479725775,27.424694045324618]);

    const handleMapClick = (event) => {
        const coords = event.get('coords');
        setLocation(coords);
    };

    return (

        <section>
            <YMaps>
                <Map
                    defaultState={{ center: location, zoom: 10 }}
                    width="100%"
                    height="100%"
                    onClick={handleMapClick}
                    style={containerStyle} >

                    <Placemark geometry={location}/>
                </Map>
            </YMaps>
        </section>
    )
}

export default Home