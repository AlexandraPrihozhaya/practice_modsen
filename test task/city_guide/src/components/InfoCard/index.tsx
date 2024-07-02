import React, {useEffect, useState} from 'react';
import {
    SButtonFav, SButtonRoute, SCard, STitle, SText, SAddress, SName
} from "./styled";
import { IoMdBookmark } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { useLocation } from "../../hooks/useLocation";
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setRoute } from '../../store/reducers/geoObjects';
import RouteCard from '../RouteCard';
import { FavoritesCollectionRef } from '../../firebase';
import { addDoc } from "@firebase/firestore"

const InfoCard = ({object}) => {

    const {isAuth, email} = useAuth();
    const {userLocation, error} = useLocation();
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.userReducer);

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

    const addToFavorite = async () => {
        createFavorite();
    }

    const createFavorite = async () => {
        await addDoc(FavoritesCollectionRef, {
            user_id: user.id, 
            geoobject_id: object.properties.CompanyMetaData.id, 
            name: object.properties.CompanyMetaData.name ? object.properties.CompanyMetaData.name : null,
            address: object.properties.CompanyMetaData.address ? object.properties.CompanyMetaData.address : null, 
            hours: object.properties.CompanyMetaData.Hours ? object.properties.CompanyMetaData.Hours.text : null, 
            phone: object.properties.CompanyMetaData.Phones ? object.properties.CompanyMetaData.Phones[0].formatted : null, 
            url: object.properties.CompanyMetaData.url ? object.properties.CompanyMetaData.url : null
        });
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
                    <SButtonFav onClick={addToFavorite}>
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