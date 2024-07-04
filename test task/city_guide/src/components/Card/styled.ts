import styled from 'styled-components';
import { CardMedia, IconButton } from '@mui/material';

export const SCard = styled.div`
  border: 3px solid #c4c4c4;
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
  max-width: 100px;
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

export const SIconButtonFav = styled.button`
  background: none;
  color: #c75e5e;
  cursor: pointer;
  font-size: 20px;
  border: none;
`;

export const SIconButtonArrow = styled.button`
  background: none;
  color: #373737;
  cursor: pointer;
  font-size: 20px;
  border: none;
`;

export const SCardActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SCardContent = styled.div`
  padding: 12px 12px 0 12px;
`;

export const SName = styled.text`
  font-weight: 500;
  font-size: 10px;
`;
