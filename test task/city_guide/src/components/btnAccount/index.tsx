import React from 'react';
import { SAvatar, SButton, SAvatarMobile } from './styled';
import { Avatar } from '@mui/material';
import { useAuth } from '../../hooks/useAuth';
import { useAppDispatch } from '../../hooks/redux';
import { removeUser } from '../../store/reducers/userSlice';
import searchbtn from '@assets/searchbtn.png';
import { Desktop, Mobile } from '../../constants/adaptive';

const BtnAccount = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useAppDispatch();

  return (
    <>
      <Desktop>
        {isAuth ? (
          <SAvatar>
            <SButton onClick={() => dispatch(removeUser())}>
              <Avatar src="/broken-image.jpg" />
            </SButton>
          </SAvatar>
        ) : (
          <SAvatar>
            <a href="/login" role="button">
              <Avatar src={searchbtn} />
            </a>
          </SAvatar>
        )}
      </Desktop>
      <Mobile>
        {isAuth ? (
          <SAvatarMobile>
            <SButton onClick={() => dispatch(removeUser())}>
              <Avatar src="/broken-image.jpg" />
            </SButton>
          </SAvatarMobile>
        ) : (
          <SAvatarMobile>
            <a href="/login" role="button">
              <Avatar src={searchbtn} />
            </a>
          </SAvatarMobile>
        )}
      </Mobile>
    </>
  );
};

export default BtnAccount;
