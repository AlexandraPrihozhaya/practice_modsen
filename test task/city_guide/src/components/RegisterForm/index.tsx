import React from 'react';
import {
  SInput,
  SForm,
  SBlock,
  SDiv,
  SButton,
  SH2,
  SLabel,
  SText,
  SLink,
  SRow,
  SIcon,
  SErrorMessage,
} from './styled';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/reducers/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (
    email: string,
    password: string,
    password2: string
  ) => {
    if (password === password2) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          console.log(user);
          dispatch(
            setUser({
              id: user.uid,
              email: user.email,
              token: user.refreshToken,
            })
          );
          navigate('/');
        })
        .catch(console.error);
    } else console.log('error');
  };

  return (
    <SBlock>
      <Formik
        initialValues={{ email: '', password: '', password2: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('Некорректный email адрес')
            .required('Email обязателен'),
          password: Yup.string()
            .min(6, 'Пароль должен содержать не менее 6 символов')
            .required('Пароль обязателен'),
          password2: Yup.string()
            .min(6, 'Пароль должен содержать не менее 6 символов')
            .required('Пожалуйста, подтвердите пароль'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values.email);
            handleRegister(values.email, values.password, values.password2);
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <SForm>
            <SRow>
              <SLink to={'/'}>
                <SIcon />
              </SLink>
              <SH2>Регистрация</SH2>
            </SRow>
            <SDiv className="form-group">
              <SLabel
                htmlFor="email"
                className={
                  touched.email && errors.email
                    ? 'error'
                    : touched.email && !errors.email
                      ? 'valid'
                      : ''
                }
              >
                Email
              </SLabel>
              <SInput
                type="email"
                name="email"
                placeholder="email@mail.ru"
                className={
                  touched.email && errors.email
                    ? 'error'
                    : touched.email && !errors.email
                      ? 'valid'
                      : ''
                }
              />
              <SErrorMessage name="email" component="div" />
            </SDiv>
            <SDiv className="form-group">
              <SLabel
                htmlFor="password"
                className={
                  touched.password && errors.password
                    ? 'error'
                    : touched.password && !errors.password
                      ? 'valid'
                      : ''
                }
              >
                Пароль
              </SLabel>
              <SInput
                type="password"
                name="password"
                placeholder="123456"
                className={
                  touched.password && errors.password
                    ? 'error'
                    : touched.password && !errors.password
                      ? 'valid'
                      : ''
                }
              />
              <SErrorMessage name="password" component="div" />
            </SDiv>
            <SDiv className="form-group">
              <SLabel
                htmlFor="password2"
                className={
                  touched.password2 && errors.password2
                    ? 'error'
                    : touched.password2 && !errors.password2
                      ? 'valid'
                      : ''
                }
              >
                Подтвердите пароль
              </SLabel>
              <SInput
                type="password"
                name="password2"
                placeholder="123456"
                className={
                  touched.password2 && errors.password2
                    ? 'error'
                    : touched.password2 && !errors.password2
                      ? 'valid'
                      : ''
                }
              />
              <SErrorMessage name="password2" component="div" />
            </SDiv>
            <SButton type="submit">Зарегистрироваться</SButton>
            <SText>
              есть аккаунт? <SLink to={'/login'}>Войти</SLink>
            </SText>
          </SForm>
        )}
      </Formik>
    </SBlock>
  );
};

export default RegisterForm;
