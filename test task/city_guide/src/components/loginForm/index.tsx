import React, {useState} from "react";
import {
    SInput, SForm, SBlock, SDiv, SButton, 
    SH2, SLabel, SText, SLink, SRow, SIcon
  } from "./styled";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/reducers/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const dispatch = useDispatch();
const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      console.log(user);
      dispatch(setUser({
        id: user.uid,
        email: user.email,
        token: user.refreshToken
      }));
      navigate('/');
    })
    .catch(() => alert('Invalid user!'));
  }

  return (
    <SBlock>
      <SForm onSubmit={(e) => {
          e.preventDefault();
          handleLogin(email, password);
        }}>
       <SRow>
        <SLink to={"/"}><SIcon /></SLink>
        <SH2>Вход</SH2>
       </SRow>
       <SDiv className="form-group">
         <SLabel htmlFor="email">Email</SLabel>
         <SInput 
            type="email" 
            className="form-control" 
            name="email" 
            placeholder="user@mail.ru" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
         />
       </SDiv>
       <SDiv className="form-group">
         <SLabel htmlFor="password">Пароль</SLabel>
         <SInput 
            type="password" 
            className="form-control" 
            name="password" 
            placeholder="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
         />
       </SDiv>
       <SButton type="submit">Войти</SButton>
       <SText>нет аккаунта? <SLink to={"/register"}>Зарегистрироваться</SLink></SText>
      </SForm>
    </SBlock>
  );
};

export default LoginForm;