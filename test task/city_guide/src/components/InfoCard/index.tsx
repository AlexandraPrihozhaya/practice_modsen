import React from 'react';
import {
    SButtonFav, SCard, STitle, SText, SAddress, SName
} from "./styled";
import { IoMdBookmark } from "react-icons/io";
import { useAuth } from "../../hooks/useAuth";

const InfoCard = ({object}) => {

    const {isAuth, email} = useAuth();

    return (
        <SCard>
            {object.properties.CompanyMetaData.name && (
                <STitle>{object.properties.CompanyMetaData.name}</STitle>
            )}
            {object.properties.CompanyMetaData.address && (
                <SText><SName>Адрес: </SName>{object.properties.CompanyMetaData.address}</SText>
            )}
            {object.properties.CompanyMetaData.Hours.text && (
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
        </SCard>
    );
}

export default InfoCard;