import React, {useState} from "react";
import { useAuth } from "../../hooks/useAuth";
import {
    SInput, SForm, SBlock, SDiv, SButton, SH2, SLabel, SText, SLink, SRow, SIcon
  } from "./styled";

const RegisterForm = () => {

    const [log, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleInputChange = (e) => {
        setLogin({ ...log, [e.target.name]: e.target.value })
    }

  return (
    <SBlock>
      <SForm>
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
       <SDiv className="form-group">
         <SLabel htmlFor="password">Подтвердите пароль</SLabel>
         <SInput 
            type="password" 
            className="form-control" 
            name="password" 
            placeholder="password" 
            value={log.password} 
            onChange={handleInputChange}
         />
       </SDiv>
       <SButton type="submit">Зарегистрироваться</SButton>
       <SText>есть аккаунт? <SLink to={"/login"}>Войти</SLink></SText>
      </SForm>
    </SBlock>
  );
};

export default RegisterForm;