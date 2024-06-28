import React, {useEffect} from 'react';
import {
    SButtonFav, SButtonRoute, SCard, STitle, SText, SAddress, SName
} from "./styled";
import { IoMdBookmark } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { useLocation } from "../../hooks/useLocation";
import { useAppDispatch } from '../../hooks/redux';
import { setRoute } from '../../store/reducers/geoObjects';

const InfoCard = ({object}) => {

    const {isAuth, email} = useAuth();
    const {userLocation, error} = useLocation();
    const dispatch = useAppDispatch();

    const onRouteBtnClick = async () => {
        try {
            const response = await fetch(`https://router.hereapi.com/v8/routes?transportMode=pedestrian&origin=${userLocation[1]},${userLocation[0]}&destination=${object.geometry.coordinates[0]},${object.geometry.coordinates[1]}&return=summary&apikey=3MCN0jdIrJZk-_ShSOiQd-QZjab1yMF6Xz9V2zG6DiI`);
            const data = await response.json();
            const distance = parseFloat((data.routes[0].sections[0].summary.length / 1000).toFixed(1));
            const duration = Math.ceil(data.routes[0].sections[0].summary.duration / 60);
            dispatch(setRoute({ distance, duration }));
            console.log(userLocation[1] + " " + userLocation[0])
            console.log(object.geometry.coordinates[0] + " " + object.geometry.coordinates[1])
        } catch (error) {
            console.error("Error getting data:", error);
        }
    }

    return (
        <SCard>
            {object.properties.CompanyMetaData.name && (
                <STitle>{object.properties.CompanyMetaData.name}</STitle>
            )}
            {object.properties.CompanyMetaData.address && (
                <SText><SName>Адрес: </SName>{object.properties.CompanyMetaData.address}</SText>
            )}
            {object.properties.CompanyMetaData.Hours && (
                <SText><SName>Время работы: </SName>{object.properties.CompanyMetaData.Hours.text}</SText>
            )}
            {object.properties.CompanyMetaData.Phones && (
                <SText><SName>Телефон: </SName>{object.properties.CompanyMetaData.Phones[0].formatted}</SText>
            )}
            {object.properties.CompanyMetaData.url && (
                <>
                    <SName>Сайт: </SName>
                    <SAddress href={object.properties.CompanyMetaData.url} target="_blank" rel="noopener noreferrer">
                        {object.properties.CompanyMetaData.url}      
                    </SAddress>   
                </>
            )}
            {isAuth && ( 
                <SButtonFav>
                    <IoMdBookmark /> Добавить в избранное
                </SButtonFav>
            )}  
            <SButtonRoute onClick={onRouteBtnClick}>
                <FaLocationArrow /> Маршрут
            </SButtonRoute>
        </SCard>
    );
}

export default InfoCard;