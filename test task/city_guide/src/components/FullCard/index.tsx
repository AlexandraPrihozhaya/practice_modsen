import React from 'react';
import {
  SCard,
  SCardMedia,
  SCardHeader,
  SCardContent,
  SText,
  SCardActions,
  SButtonFav,
  SButtonGeo,
  STitle,
  SBlock,
  SIconButtonArrow,
  SName,
  SAddress,
} from './styled';
import { IoMdBookmark, IoMdArrowDropleft } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { setShow } from '../../store/reducers/geoObjects';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const FullCard = () => {
  const dispatch = useAppDispatch();
  const geoObjects = useAppSelector((state) => state.geoObjectsReducer);

  const handleBtnClick = () => {
    dispatch(setShow(false));
    console.log(geoObjects.fullObjectInfo);
  };

  return (
    <>
      <SBlock>
        <SIconButtonArrow aria-label="show more info" onClick={handleBtnClick}>
          <IoMdArrowDropleft />
        </SIconButtonArrow>
        <STitle>Избранное </STitle>
      </SBlock>
      <SCard>
        <SCardContent>
          <SCardMedia
            component="img"
            image="https://masterpiecer-images.s3.yandex.net/c352b1b9801c11ee9607720ccb3e265f:upscaled"
          />
          {geoObjects.fullObjectInfo.name && (
            <SCardHeader>{geoObjects.fullObjectInfo.name}</SCardHeader>
          )}
          {geoObjects.fullObjectInfo.address && (
            <SText>
              <SName>Адрес: </SName>
              {geoObjects.fullObjectInfo.address}
            </SText>
          )}
          {geoObjects.fullObjectInfo.hours && (
            <SText>
              <SName>Время работы: </SName>
              {geoObjects.fullObjectInfo.hours}
            </SText>
          )}
          {geoObjects.fullObjectInfo.phone && (
            <SText>
              <SName>Телефон: </SName>
              {geoObjects.fullObjectInfo.phone}
            </SText>
          )}
          {geoObjects.fullObjectInfo.url && (
            <>
              <SName>Сайт: </SName>
              <SAddress
                href={geoObjects.fullObjectInfo.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {geoObjects.fullObjectInfo.url}
              </SAddress>
            </>
          )}
        </SCardContent>
        <SCardActions>
          <SButtonFav>
            <IoMdBookmark /> Сохранено
          </SButtonFav>
          <SButtonGeo>
            <FaLocationDot /> Маршрут
          </SButtonGeo>
        </SCardActions>
      </SCard>
    </>
  );
};

export default FullCard;
