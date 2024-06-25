import React, {useState} from "react"
import {
  SAvatar, SButton
} from "./styled";
import { Avatar } from '@mui/material';
import { useAuth } from "../../hooks/useAuth";
import { useAppDispatch } from "../../hooks/redux";
import { removeUser } from "../../store/reducers/userSlice";
import searchbtn from '@assets/searchbtn.png'

const BtnAccount = () => {

    const {isAuth, email} = useAuth();
    const dispatch = useAppDispatch();

    return (
      isAuth ? (
        <SAvatar>
        <SButton
          onClick={() => dispatch(removeUser())}>
          <Avatar src="/broken-image.jpg"/>
        </SButton>
      </SAvatar>
      ) : (
        <SAvatar>
          <a
            href="/login"
            role="button">
            <Avatar src={searchbtn}/>
          </a>
        </SAvatar>
      )
    )
};

export default BtnAccount