import styled from "styled-components";
import { CardMedia, IconButton } from '@mui/material';

export const SCard = styled.div`
    border: 3px solid #C4C4C4;
    border-radius: 10px;
    width: 264px;
    margin-bottom: 20px;
`;

export const SDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SCardMedia = styled(CardMedia)`
    border-radius: 10px;
    height: 80px;
    width: 100px;
    margin-right: 10px;
`;

export const SCardHeader = styled.p`
    width: 120px;
    font-size: 12px;
    font-weight: 500;
`;

export const SText = styled.p`
    font-size: 10px;
    justify-content: space-between;
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const SIconButtonFav = styled(IconButton)`
    svg {
        color: #C75E5E;
    }
`;

export const SIconButtonArrow = styled(IconButton)`
    svg {
        color: #373737;
    }
`;

export const SCardActions = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SCardContent = styled.div`
    padding: 12px 12px 0 12px;
`;