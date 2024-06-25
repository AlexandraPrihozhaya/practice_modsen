import styled from "styled-components";
import { Card, CardContent, CardMedia, CardHeader } from '@mui/material';

export const SCard = styled(Card)`
    border: 3px solid #C4C4C4;
    border-radius: 10px;
    box-shadow: none;
    
`;

export const SCardContent = styled(CardContent)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const SCardMedia = styled(CardMedia)`
    border-radius: 10px;
    height: 100px;
    max-width: 120px;
    margin-right: 10px;
`;

export const STitle = styled(CardHeader)`
    
`;