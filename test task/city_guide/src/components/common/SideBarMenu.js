import { Sidebar } from 'flowbite-react';
import React, { useState } from 'react';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { MdOutlineFavorite } from "react-icons/md";
import { IoMdArrowDropleft } from "react-icons/io";
import {
  SSearch, SSearchIcon, SButtonSearch, SButtonFav
} from "./styled";

function SideBarMenu() {
  const [isSidebarOpenSearch, setIsSidebarOpenSearch] = useState(false);
  const [isSidebarOpenFav, setIsSidebarOpenFav] = useState(false);

  const handleOpenSidebarSearch = () => {
    if (isSidebarOpenFav) {
      setIsSidebarOpenFav(false);
    }
    setIsSidebarOpenSearch(true);
  };

  const handleOpenSidebarFav = () => {
    if (isSidebarOpenSearch) {
      setIsSidebarOpenSearch(false);
    }
    setIsSidebarOpenFav(true);
  };

  const handleCloseSidebar = () => {
    if(isSidebarOpenSearch) {
      setIsSidebarOpenSearch(false);
    }
    if(isSidebarOpenFav) {
      setIsSidebarOpenFav(false);
    }
  };

  return (



    <div className="app">
      <Sidebar className="sidebar-1">
        <Sidebar.Logo className="logo" href="/" img="https://ltdfoto.ru/images/2024/06/17/Group.png" imgAlt="logo"></Sidebar.Logo>
        <div className='icons'>

          <SButtonSearch onClick={handleOpenSidebarSearch}
              style={!isSidebarOpenSearch ? { backgroundColor: '#5E7BC7', color: '#fff', border: '3px solid #5E7BC7' } : {
                backgroundColor: '#fff', color: '#5E7BC7', border: '3px solid #C4C4C4'
          }}>
            <HiMiniMagnifyingGlass />
          </SButtonSearch>
          
          <SButtonFav className='icon_cont fav' onClick={handleOpenSidebarFav}
              style={!isSidebarOpenFav ? { backgroundColor: '#C75E5E', color: '#fff', border: '3px solid #C75E5E' } : {
                backgroundColor: '#fff', color: '#C75E5E', border: '3px solid #C4C4C4'
            }}>
            <MdOutlineFavorite />
          </SButtonFav>

        </div>
      </Sidebar>

      <div className={`sidebar-2 ${isSidebarOpenSearch ? 'open' : ''}`}>
        <div className="inside">
          <SSearch>
            <SSearchIcon>
              <HiMiniMagnifyingGlass />
            </SSearchIcon>
            <input placeholder="Место, адрес.." />
          </SSearch>
          <p className="text_radius">В радиусе</p>
          <input className="input_radius" id="number" type="number" /> <text className="text_km">км</text>
        </div>

        <button className="btn_close" onClick={handleCloseSidebar}> 
          <IoMdArrowDropleft />
        </button>
      </div>

      <div className={`sidebar-3 ${isSidebarOpenFav ? 'open' : ''}`}>
        <div className="inside">
          <SSearch>
            <SSearchIcon>
              <HiMiniMagnifyingGlass />
            </SSearchIcon>
            <input placeholder="Место, адрес.." />
          </SSearch>
        </div>

        <button className="btn_close" onClick={handleCloseSidebar}>
          <IoMdArrowDropleft />
        </button>
      </div>
    </div>
  );
}

export default SideBarMenu;