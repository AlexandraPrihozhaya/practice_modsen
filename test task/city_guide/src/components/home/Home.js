import React, {useContext, useState} from "react"
import { useLocation } from "react-router-dom"
import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps'
import SideBarMenu from "../common/SideBarMenu.js"

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
            {/* <SideBarMenu /> */}
            <YMaps>
                <Map
                    defaultState={{ center: location, zoom: 10 }}
                    width="100%"
                    height="100%"
                    onClick={handleMapClick}
                    style={containerStyle} >
                    <Placemark geometry={location}/>
                    <Circle
                        geometry={[[location[0], location[1]], 10000]}
                        options={{
                        draggable: true,
                        fillColor: "#778899",
                        fillOpacity: 0.2,
                        strokeColor: "#778899",
                        strokeOpacity: 0.8,
                        strokeWidth: 1,
                    }}
                    />
                </Map>
            </YMaps>
        </section>
    )
}

export default Home