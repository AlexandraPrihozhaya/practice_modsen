import React, { useContext } from "react"
//import { AuthContext } from "./AuthProvider"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

const Logout = () => {

  const navigate = useNavigate()
  const { logout } = useAuth();


  const handleLogout = () => {
    logout();
    navigate("/", { state: { message: " You have been logged out!" } })
  }

  return (
    <>
      <li>
        <Link className="dropdown-item" to={"/profile"}>
          Профиль
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <button className="dropdown-item" onClick={handleLogout}>
        Выход
      </button>
    </>
  )
}

export default Logout