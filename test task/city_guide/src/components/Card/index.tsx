import React from 'react';
import {
  SCard,
  SCardMedia,
  SText,
  SDiv,
  SCardHeader,
  SIconButtonFav,
  SIconButtonArrow,
  SCardActions,
  SCardContent,
  SName,
} from './styled';
import { IoMdArrowDropright, IoMdBookmark } from 'react-icons/io';
import { useAppDispatch } from '../../hooks/redux';
import { setShow, setFullObjectInfo } from '../../store/reducers/geoObjects';
import { FavoritesCollectionRef } from '../../firebase';
import { query, where, deleteDoc, getDocs } from '@firebase/firestore';

const Card = ({ object }) => {
  const dispatch = useAppDispatch();

  const handleBtnClick = () => {
    dispatch(setShow(true));
    dispatch(setFullObjectInfo(object));
  };

  const deleteFavorite = async () => {
    const q = query(
      FavoritesCollectionRef,
      where('geoobject_id', '==', object.objectId)
    );
    const docSnap = await getDocs(q);
    docSnap.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  };

  return (
    <SCard>
      <SCardContent>
        <SDiv>
          <SCardMedia
            component="img"
            image="https://masterpiecer-images.s3.yandex.net/c352b1b9801c11ee9607720ccb3e265f:upscaled"
          />
          {object.name && <SCardHeader>{object.name}</SCardHeader>}
        </SDiv>
        {object.address && (
          <SText>
            <SName>Адрес: </SName>
            {object.address}
          </SText>
        )}
        {object.hours && (
          <SText>
            <SName>Время работы: </SName>
            {object.hours}
          </SText>
        )}
      </SCardContent>
      <SCardActions>
        <SIconButtonFav
          aria-label="delete from favorites"
          onClick={deleteFavorite}
        >
          <IoMdBookmark />
        </SIconButtonFav>
        <SIconButtonArrow aria-label="show more info" onClick={handleBtnClick}>
          <IoMdArrowDropright />
        </SIconButtonArrow>
      </SCardActions>
    </SCard>
  );
};

export default Card;
