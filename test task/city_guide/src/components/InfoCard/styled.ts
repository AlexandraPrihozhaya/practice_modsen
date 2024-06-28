import styled from "styled-components";

export const SButtonFav = styled.button`
    padding: 7px 14px;
    font-size: 14px;
    background: #C75E5E;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #fff;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`;

export const SCard = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    width: 300px;
`;

export const STitle = styled.text`
    font-weight: 700;
    font-size: 20px;
    color: #405F7B;
`;

export const SText = styled.p`
    font-weight: 300;
    font-size: 14px;
`;

export const SAddress = styled.a`
    font-weight: 300;
    font-size: 14px;
    display: block; 
    wordBreak: break-all;
    textOverflow: ellipsis;
    whiteSpace: nowrap; 
    overflow: hidden;
`;

export const SName = styled.text`
    font-weight: 500;
    font-size: 14px;
`;