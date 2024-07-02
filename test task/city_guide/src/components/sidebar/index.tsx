import { Sidebar } from 'flowbite-react';
import React, { useState, useContext, useEffect } from 'react';
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoMdArrowDropleft, IoMdBookmark } from "react-icons/io";
import {
  SSearch, SSearchIcon, SButtonSearch, SButtonFav, SCards
} from "./styled";
import BtnAccount from '../BtnAccount';
import CategoryList from '../CategoryList';
import logo from '@assets/logo.png';
import Card from '../Card';
import FullCard from '../FullCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setLoading, setRadius, setSearchAddress, setFavorites } from '../../store/reducers/geoObjects';
import { FavoritesCollectionRef } from '../../firebase';
import { useAuth } from "../../hooks/useAuth";
import { query, where, getDocs, collection } from "firebase/firestore";
import { Favorites } from '../../store/reducers/geoObjects';

function SideBarMenu() {
  const [isSidebarOpenSearch, setIsSidebarOpenSearch] = useState(false);
  const [isSidebarOpenFav, setIsSidebarOpenFav] = useState(false);
  const [radiusInput, setRadiusInput] = useState<number>(0);
  const [searchAddressInput, setSearchAddressInput] = useState<string>();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.userReducer);
  const geoObjects = useAppSelector(state => state.geoObjectsReducer);
  const {isAuth, email} = useAuth();

  // useEffect(() => {
  //   if(isAuth) {
  //     const getFavorites = async () => {
  //       const data = await getDocs(FavoritesCollectionRef);
  //       const filteredFavorites = data.docs.filter((elem) => elem.data().user_id === user.id).map((elem) => ({...elem.data(), id: elem.id}));
  //       console.log(filteredFavorites)
  //       setFavorites(filteredFavorites);

  //       getFavorites();
  //     }
  //   }
  // }, [favorites, isAuth])
  
  const fetchFavorites  = async () => {
    try {
      const q = query(FavoritesCollectionRef, where("user_id", "==", user.id));
      const data = await getDocs(q);
      const favorites: Favorites[] = data.docs.map((elem) => ({
        objectId: elem.data().geoobject_id, // Make sure these field names match your Firestore
        name: elem.data().name, 
        address: elem.data().address,
        hours: elem.data().hours,
        phone: elem.data().phone,
        url: elem.data().url,
        id: elem.id 
      }));
      dispatch(setFavorites(favorites));
      console.log(geoObjects.favorites);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  };
  
    useEffect(() => {
      if (isAuth) {
        fetchFavorites();
      }
    }, [isAuth]);

  useEffect(() => {
    dispatch(setRadius(radiusInput));
  }, [radiusInput])

  useEffect(() => {
    dispatch(setSearchAddress(searchAddressInput));
  }, [searchAddressInput])

  const handleRadiusChange = (e) => {
    setRadiusInput(Number(e.target.value));
  };

  const handleInputChange = (e) => {
    setSearchAddressInput(e.target.value);
  };

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

  const handleBtnClick = () => {
    dispatch(setLoading(true));
  };

  return (

    <div className="app">
      <Sidebar className="sidebar-1">
        <Sidebar.Logo className="logo" href="/" img={logo} imgAlt="logo"></Sidebar.Logo>
        <div className='icons'>

          <SButtonSearch onClick={handleOpenSidebarSearch} isOpen={isSidebarOpenSearch}>
            <HiMiniMagnifyingGlass />
          </SButtonSearch>

          {isAuth && (
            <SButtonFav className='icon_cont fav' onClick={handleOpenSidebarFav} isOpen={isSidebarOpenFav}>
              <IoMdBookmark />
            </SButtonFav>
          )}
        </div>

        <BtnAccount />
      </Sidebar>

      <div className={`sidebar-2 ${isSidebarOpenSearch ? 'open' : ''}`}>
        <div className="inside">
          <SSearch>
            <SSearchIcon>
              <HiMiniMagnifyingGlass />
            </SSearchIcon>
            <input type="text" placeholder="Место, адрес.." value={searchAddressInput} onChange={handleInputChange}/>
          </SSearch>
          <p className="text_search">Искать:</p>
          <CategoryList />
          <p className="text_radius">В радиусе</p>
          <input className="input_radius" id="number" type="number" value={radiusInput} onChange={handleRadiusChange} min={0}/> <text className="text_km">км</text>
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
            <input type="text" placeholder="Место, адрес.." value={searchAddressInput} onChange={handleInputChange}/>
          </SSearch>

        {!geoObjects.isShow ? (
          <>
          <p className="text_search">Избранное:</p>
          <SCards>
            {geoObjects.favorites.map((item) => (
              <Card key={item.objectId} object={item}/>
            ))}
          </SCards>
          </>
        ) : <FullCard /> }

        </div>

        <button className="btn_close" onClick={handleCloseSidebar}>
          <IoMdArrowDropleft />
        </button>
      </div>
      
    </div>
  );
}

export default SideBarMenu;