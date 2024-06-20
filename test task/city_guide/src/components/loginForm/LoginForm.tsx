import React, {useState} from "react";
import { useAuth } from "../../hooks/useAuth";
import {
    SInput, SForm, SBlock, SDiv, SButton, SH2, SLabel, SText, SLink, SRow, SIcon
  } from "./styled";

const LoginForm = () => {

    const { login } = useAuth();

    const [log, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        setLogin({ ...log, [e.target.name]: e.target.value })
    }

    const handleLogin = () => {
      login({
        id: '1',
        email: log.email,
        password: log.password
      });
    };

  return (
    <SBlock>
      <SForm onSubmit={handleLogin}>
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
            value={log.email} 
            onChange={handleInputChange}
         />
       </SDiv>
       <SDiv className="form-group">
         <SLabel htmlFor="password">Пароль</SLabel>
         <SInput 
            type="password" 
            className="form-control" 
            name="password" 
            placeholder="password" 
            value={log.password} 
            onChange={handleInputChange}
         />
       </SDiv>
       <SButton type="submit">Войти</SButton>
       <SText>нет аккаунта? <SLink to={"/register"}>Зарегистрироваться</SLink></SText>
      </SForm>
    </SBlock>
  );
};

export default LoginForm;