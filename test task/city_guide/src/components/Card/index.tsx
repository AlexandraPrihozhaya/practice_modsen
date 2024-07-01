import React from 'react';
import {
    SCard, SCardMedia, SText, SDiv, SCardHeader, 
    SIconButtonFav, SIconButtonArrow, SCardActions, SCardContent
} from "./styled";
import { IoMdArrowDropright, IoMdBookmark } from "react-icons/io";

const Card = ({object}) => {

  const handleBtnClick = () => {

  };

  return (
    <SCard>
      <SCardContent>
            <SDiv>
                <SCardMedia
                    component="img"
                    image="https://masterpiecer-images.s3.yandex.net/c352b1b9801c11ee9607720ccb3e265f:upscaled"
                />
                <SCardHeader>{object.name && (object.name)}</SCardHeader>
            </SDiv>
            {object.address && (
              <SText>Адрес: {object.address}</SText>
            )}
            {object.hours && (
              <SText>Время работы: {object.hours}</SText>
            )}
      </SCardContent>
      <SCardActions>
        <SIconButtonFav aria-label="add to favorites">
          <IoMdBookmark />
        </SIconButtonFav>
        <SIconButtonArrow aria-label="show more info" onClick={handleBtnClick}>
          <IoMdArrowDropright />
        </SIconButtonArrow>
      </SCardActions>
    </SCard>
  );
}

export default Card;