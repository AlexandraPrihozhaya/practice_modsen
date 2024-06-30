import styled from "styled-components";

export const SMap = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
`;

export const SMdClose = styled.div`
    position: absolute;
    top: 10px;
    background: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    border: none;
    right: ${ props => (props.isShow ? `10px` : `360px`)}; 
`;

