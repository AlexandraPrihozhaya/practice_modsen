import React, {useState} from "react";
import {
    SInput, SForm, SBlock, SDiv, SButton, 
    SH2, SLabel, SText, SLink, SRow, SIcon, SErrorMessage
  } from "./styled";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/reducers/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup'; 

const LoginForm = () => {

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
      <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
            .email('Некорректный email адрес')
            .required('Email обязателен'),
            password: Yup.string()
            .min(6, 'Пароль должен содержать не менее 6 символов')
            .required('Пароль обязателен')
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            console.log(values.email);
            handleLogin(values.email, values.password);
            setSubmitting(false);
            }, 500);
          }}
          >
          {({ isSubmitting, errors, touched }) => (
        <SForm>
        <SRow>
          <SLink to={"/"}><SIcon /></SLink>
          <SH2>Вход</SH2>
        </SRow>
        <SDiv className="form-group">
          <SLabel htmlFor="email" className={touched.email && errors.email ? 'error' : touched.email && !errors.email ? 'valid' : ''}>Email</SLabel>
          <SInput type="email" name="email" placeholder="email@mail.ru" 
                className={touched.email && errors.email ? 'error' : touched.email && !errors.email ? 'valid' : ''}/>
          <SErrorMessage name="email" component="div" />
        </SDiv>
        <SDiv className="form-group">
          <SLabel htmlFor="password" className={touched.password && errors.password ? 'error' : touched.password && !errors.password ? 'valid' : ''}>Пароль</SLabel>
          <SInput type="password" name="password" placeholder="123456" 
                className={touched.password && errors.password ? 'error' : touched.password && !errors.password ? 'valid' : ''}/>
          <SErrorMessage name="password" component="div" />
        </SDiv>
        <SButton type="submit" disabled={isSubmitting}>Войти</SButton>
        <SText>нет аккаунта? <SLink to={"/register"}>Зарегистрироваться</SLink></SText>
        </SForm>
        )}
      </Formik>
    </SBlock>
  );
};

export default LoginForm;