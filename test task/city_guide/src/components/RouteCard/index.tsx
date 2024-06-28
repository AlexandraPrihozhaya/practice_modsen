import React from 'react';
import {
    SCard, SDiv, SDistance, STime, STextValue, STextName
} from "./styled";

const RouteCard = () => {

    return (
        <SCard>
            <SDiv>
                <SDistance>
                    <STextValue>1,1 km</STextValue>
                    <STextName>дистанция</STextName>
                </SDistance>
                <STime>
                    <STextValue>40 мин</STextValue>
                    <STextName>примерное время</STextName>
                </STime>
            </SDiv>
        </SCard>
    );
}

export default RouteCard;