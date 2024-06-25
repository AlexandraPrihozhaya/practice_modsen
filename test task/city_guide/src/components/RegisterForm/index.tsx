import React, {useState} from "react";
import { useAuth } from "../../hooks/useAuth";
import {
    SInput, SForm, SBlock, SDiv, SButton,
    SH2, SLabel, SText, SLink, SRow, SIcon
  } from "./styled";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/reducers/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [password2, setPassword2] = useState(''); 

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string, password2: string) => {
    if(password === password2) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          console.log(user);
          dispatch(setUser({
            id: user.uid,
            email: user.email,
            token: user.refreshToken
          }));
          navigate('/');
        })
        .catch(console.error);
    } else console.log("error")
  }
    
  return (
    <SBlock>
      <SForm onSubmit={(e) => {
          e.preventDefault();
          handleRegister(email, password, password2);
        }}>
       <SRow>
        <SLink to={"/"}><SIcon /></SLink>
        <SH2>Регистрация</SH2>
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
       <SDiv className="form-group">
         <SLabel htmlFor="password2">Подтвердите пароль</SLabel>
         <SInput 
            type="password" 
            className="form-control" 
            name="password2" 
            placeholder="password" 
            value={password2} 
            onChange={(e) => setPassword2(e.target.value)}
         />
       </SDiv>
       <SButton type="submit">Зарегистрироваться</SButton>
       <SText>есть аккаунт? <SLink to={"/login"}>Войти</SLink></SText>
      </SForm>
    </SBlock>
  );
};

export default RegisterForm;