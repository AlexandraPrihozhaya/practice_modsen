import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Form, Field, ErrorMessage } from 'formik';

export const SInput = styled(Field)`
  padding: 16px;
  font-size: 14px;
  border: 1px solid #eee;
  &:focus {
    outline: none;
    border-color: #eee;
  }
  &.form-control {
    background-color: #fff;
    box-shadow: none;
  }
  &.error {
    border-color: red;
  }
  &.valid {
    border-color: green;
  }
`;

export const SErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
`;

export const SForm = styled(Form)`
  width: 400px;
  box-shadow: 0 0 15px 1px hsl(223, 48%, 57%, 0.2);
  background-color: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  position: relative;
`;

export const SBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SButton = styled.button`
  padding: 12px;
  cursor: pointer;
  border: none;
  background-color: #5e7bc7;
  border-radius: 10px;
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
  width: 100%;
`;

export const SH2 = styled.h2`
  font-weight: 400;
`;

export const SLabel = styled.label`
  font-weight: 300;
  position: absolute;
  top: -10px;
  left: 10px;
  background: #fff;
  padding: 0 5px;
  &.error {
    color: red;
  }
  &.valid {
    color: green;
  }
`;

export const SText = styled.text`
  font-size: 15px;
  font-weight: 400;
`;

export const SLink = styled(Link)`
  color: #000;
`;

export const SRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const SIcon = styled(FaArrowLeftLong)`
  margin-right: 10px;
  font-size: 20px;
  font-weight: 300;
`;
