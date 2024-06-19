import React from "react"
import SideBarMenu from "../components/sidebar/SideBarMenu"
import MyMap from "../components/ymap/MyMap"

const Home = () => {

    return (
        <section style={{display: 'flex'}}>
            <SideBarMenu /> 
            <MyMap />
        </section>
    )
}

export default Home