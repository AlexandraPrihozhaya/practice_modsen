import React, {useState} from "react"
import Logout from "../logout/Logout";
import {
  SAvatar, SDropdownMenu, SDropdownItem, SLink
} from "./styled";
import { Avatar } from '@mui/material';

const BtnAccount = () => {

    const isAuth = localStorage.getItem("auth");
    const [showAccount, setShowAccount] = useState(false)

    const handleAccountClick = () => {
      setShowAccount(!showAccount)
    }

    return (
      <SAvatar>
        <a
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={handleAccountClick}>
          <Avatar src="/broken-image.jpg"/>
        </a>

        <SDropdownMenu show={showAccount}>
          {isAuth ? (
            <Logout />
          ) : (
            <SDropdownItem>
              <SLink to="/login">
                Вход
              </SLink>
            </SDropdownItem>
          )}
        </SDropdownMenu>
      </SAvatar>
    );
};

export default BtnAccount