import styled from "styled-components";
import { Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";

export const SInput = styled.input`
    padding: 16px;
    font-size: 14px;
    border: 1px solid #eee;
    &:focus {
        outline: none;
        border-color: #eee;
    }
`;

export const SForm = styled.form`
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
    background-color: #5E7BC7;
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