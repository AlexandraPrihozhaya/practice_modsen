import styled from 'styled-components';
import { Avatar } from '@mui/material';

export const SList = styled.ul`
  padding: 0 20px;
`;

export const SLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  &:hover {
    border-radius: 20px;
    background-color: #eee;
  }
  opacity: ${(props) => (!props.isSelected ? '0.4' : '1')};
  cursor: pointer;
`;

export const SAvatar = styled(Avatar)`
  margin-right: 14px;
`;

export const SBlock = styled.div`
  height: 360px;
  border: 3px solid #c4c4c4;
  border-radius: 10px;
  overflow-y: auto;
  scrollbar-width: thin;
`;
