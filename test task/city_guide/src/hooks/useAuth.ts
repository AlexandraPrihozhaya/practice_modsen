import { useEffect } from "react";
import { useUser, User } from "./useUser";

export const useAuth = () => {

  const { user, addUser, removeUser, setUser } = useUser();


  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, [addUser, localStorage.getItem]);


  const login = (user: User) => {
    addUser(user);
  };


  const logout = () => {
    removeUser();
  };


  return { user, login, logout, setUser };
};
