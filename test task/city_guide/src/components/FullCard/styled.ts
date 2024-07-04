import styled from 'styled-components';
import { CardMedia } from '@mui/material';

export const SCard = styled.div`
  border: 3px solid #c4c4c4;
  border-radius: 10px;
  width: 264px;
  margin-bottom: 20px;
`;

export const SCardMedia = styled(CardMedia)`
  border-radius: 10px;
  height: 170px;
`;

export const SCardHeader = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const SCardContent = styled.div`
  padding: 12px 12px 0 12px;
`;

export const SText = styled.p`
  font-size: 12px;
  justify-content: space-between;
`;

export const SCardActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;

export const SButtonFav = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background: none;
  border-radius: 5px;
  border: 3px solid #c4c4c4;
  cursor: pointer;
  color: #808080;
  display: flex;
  justify-content: center;
`;

export const SButtonGeo = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: #5e7bc7;
  border-radius: 5px;
  border: 3px solid #5e7bc7;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: center;
`;

export const SName = styled.text`
  font-weight: 500;
  font-size: 12px;
`;

export const SAddress = styled.a`
  font-size: 12px;
  display: block;
  wordbreak: break-all;
  textoverflow: ellipsis;
  whitespace: nowrap;
  overflow: hidden;
`;

export const STitle = styled.p`
  font-size: 20px;
  font-family: 'Montserrat';
  font-weight: 600;
  color: #373737;
`;

export const SBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SIconButtonArrow = styled.button`
  background: none;
  color: #373737;
  cursor: pointer;
  font-size: 20px;
  border: none;
`;
