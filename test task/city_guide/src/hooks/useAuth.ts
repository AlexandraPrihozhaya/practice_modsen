import { useAppSelector } from './redux';

export function useAuth() {
  const { email, token, id } = useAppSelector((state) => state.userReducer);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
  
