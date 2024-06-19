import React from "react"
import SideBarMenu from "../components/sidebar/SideBarMenu.js"
import MyMap from "../components/ymap/MyMap.js"

const Home = () => {

    return (
        <section style={{display: 'flex'}}>
            <SideBarMenu /> 
            <MyMap />
        </section>
    )
}

export default Home