import { Sidebar } from 'flowbite-react';
import React, { useState, useContext } from 'react';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoMdArrowDropleft, IoMdBookmark } from "react-icons/io";
import {
  SSearch, SSearchIcon, SButtonSearch, SButtonFav
} from "./styled";
import { AppContext } from '../Provider';
import BtnAccount from '../BtnAccount';
import CategoryList from '../CategoryList';
import logo from '@assets/logo.png';
import Card from '../Card';

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

  // @ts-expect-error TS(2339): Property 'searchAddress' does not exist on type '{... Remove this comment to see the full error message
  const { searchAddress, setSearchAddress } = useContext(AppContext);
  // @ts-expect-error TS(2339): Property 'radius' does not exist on type '{}'.
  const { radius, setRadius } = useContext(AppContext);

  const [attractions, setAttractions] = useState([]);

  const handleInputChange = (e) => {
    setSearchAddress(e.target.value);
  };

  const handleRadiusChange = (e) => {
    setRadius(e.target.value);
  };

  const handleBtnClick = async () => {
  //   try {
  //     let r = radius * 1000;
  //     const response = await fetch(`https://search-maps.yandex.ru/v1/?text=архитектура&type=biz&lang=ru_RU&apikey=d2060b7e-ca8e-42ff-963a-3da7497a2f25&rspn=1&ll=${userLocation[1]},${userLocation[0]}&spn=${r / 6371*360*2},${r / 6371*360*2}&results=100`);
  //     const data = await response.json();
  //     setAttractions(data.features);
    
  // } catch (error) {
  //     console.error("Error fetching attractions:", error);
  // }
  };

  return (

    <div className="app">
      <Sidebar className="sidebar-1">
        <Sidebar.Logo className="logo" href="/" img={logo} imgAlt="logo"></Sidebar.Logo>
        <div className='icons'>

          <SButtonSearch onClick={handleOpenSidebarSearch} isOpen={isSidebarOpenSearch}>
            <HiMiniMagnifyingGlass />
          </SButtonSearch>
          
          <SButtonFav className='icon_cont fav' onClick={handleOpenSidebarFav} isOpen={isSidebarOpenFav}>
            <IoMdBookmark />
          </SButtonFav>
        </div>

        <BtnAccount />
      </Sidebar>

      <div className={`sidebar-2 ${isSidebarOpenSearch ? 'open' : ''}`}>
        <div className="inside">
          <SSearch>
            <SSearchIcon>
              <HiMiniMagnifyingGlass />
            </SSearchIcon>
            <input type="text" placeholder="Место, адрес.." value={searchAddress} onChange={handleInputChange}/>
          </SSearch>
          <p className="text_search">Искать:</p>
          <CategoryList />
          <p className="text_radius">В радиусе</p>
          <input className="input_radius" id="number" type="number" value={radius} onChange={handleRadiusChange} min={0}/> <text className="text_km">км</text>
          <button className="find_btn" onClick={handleBtnClick}>
            <HiMiniMagnifyingGlass />
          </button>
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
            <input type="text" placeholder="Место, адрес.." value={searchAddress} onChange={handleInputChange}/>
          </SSearch>
          <p className="text_search">Избранное:</p>
          <Card />
        </div>

        <button className="btn_close" onClick={handleCloseSidebar}>
          <IoMdArrowDropleft />
        </button>
      </div>
      
    </div>
  );
}

export default SideBarMenu;