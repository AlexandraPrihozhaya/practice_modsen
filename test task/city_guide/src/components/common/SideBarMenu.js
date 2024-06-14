import React, {useContext, useState} from "react"
import { Sidebar } from "flowbite-react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const SideBarMenu = () => {

    return (

        <Sidebar aria-label="Default sidebar example">
            <Sidebar.Logo href="#" img="/favicon.ico" imgAlt="Mappie logo">
                Mappie
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    <Sidebar.Item href="#" icon={HiMiniMagnifyingGlass}></Sidebar.Item>
                    <Sidebar.Item href="#" icon={MdOutlineFavoriteBorder}></Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>

    )
}

export default SideBarMenu