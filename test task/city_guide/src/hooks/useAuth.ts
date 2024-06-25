import { useAppSelector } from "./redux";

export function useAuth() {
   
   const {email, token, id} = useAppSelector(state => state.userReducer);

   return {
      isAuth: !!email,
      email,
      token,
      id,
  };
}
   
  // const { user, addUser, removeUser, setUser } = useUser();


  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (user) {
  //     addUser(JSON.parse(user));
  //   }
  // }, [addUser, localStorage.getItem]);


  // const login = (user: User) => {
  //   addUser(user);
  // };


  // const logout = () => {
  //   removeUser();
  // };


  // return { user, login, logout, setUser };
