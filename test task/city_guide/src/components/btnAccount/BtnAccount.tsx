import React, {useState} from "react"
import Logout from "../logout/Logout";
import { Link } from "react-router-dom"

const BtnAccount = () => {

    const isAuth = localStorage.getItem("auth");
    const [showAccount, setShowAccount] = useState(false)

    const handleAccountClick = () => {
      setShowAccount(!showAccount)
    }

    return (
        <div>
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${showAccount ? "show" : ""}`}
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={handleAccountClick}>
                {" "}
                Аккаунт
              </a>

              <ul
                className={`dropdown-menu ${showAccount ? "show" : ""}`}
                aria-labelledby="navbarDropdown">
                {isAuth ? (
                  <Logout />
                ) : (
                  <li>
                    <Link className="dropdown-item" to={"/login"}>
                      Вход
                    </Link>
                  </li>
                )}
              </ul>


            </li>
        </div>
    );
};

export default BtnAccount