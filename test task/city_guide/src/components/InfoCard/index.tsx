import React, {useEffect, useState} from 'react';
import {
    SButtonFav, SButtonRoute, SCard, STitle, SText, SAddress, SName
} from "./styled";
import { IoMdBookmark } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { useLocation } from "../../hooks/useLocation";
import { useAppDispatch } from '../../hooks/redux';
import { setRoute } from '../../store/reducers/geoObjects';
import RouteCard from '../RouteCard';


const InfoCard = ({object}) => {

    const {isAuth, email} = useAuth();
    const {userLocation, error} = useLocation();
    const dispatch = useAppDispatch();

    const onRouteBtnClick = async () => {
        try {
            const response = await fetch(`https://router.project-osrm.org/route/v1/walking/${userLocation[1]},${userLocation[0]};${object.geometry.coordinates[0]},${object.geometry.coordinates[1]}?overview=full&geometries=geojson`);
            const data = await response.json();
            const distance = parseFloat((data.routes[0].legs[0].distance / 1000).toFixed(1));
            const duration = Math.ceil(data.routes[0].legs[0].duration / 60);
            const arrival = [object.geometry.coordinates[1], object.geometry.coordinates[0]];
            const coordinates = data.routes[0].geometry.coordinates;
            const wayPoints = coordinates.map(oneCordinates => [oneCordinates[1], oneCordinates[0]]);
            dispatch(setRoute({ distance, duration, arrival, wayPoints }));
        } catch (error) {
            console.error("Error getting data:", error);
        }
    }


    return (
        <> 
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
            <RouteCard />
        </>
    );
}

export default InfoCard;