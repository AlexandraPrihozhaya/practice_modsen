import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export interface User {
  id: string;
  email: string;
  password: string;
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);

  const addUser = (user: User) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("auth", "true");
  };

  const removeUser = () => {
    setUser(null);
    localStorage.setItem("user", "");
    localStorage.removeItem("auth");
  };

  return { user, addUser, removeUser, setUser };
};
