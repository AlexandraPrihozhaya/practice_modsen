import styled from 'styled-components';

export const SSearch = styled.div`
  background: rgba(250, 250, 250, 0.3);
  border: 3px solid #c4c4c4;
  border-radius: 10px;
  height: 40px;
  input {
    border-radius: 10px;
    padding: 0 16px;
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`;

export const SSearchIcon = styled.div`
  letter-spacing: inherit;
  padding: 12px 12px 12px 26px;
  display: flex;
  cursor: pointer;
  color: #8c8c8c;
`;

export const SButtonSearch = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => (!props.isOpen ? `#5E7BC7` : `#fff`)};
  color: ${(props) => (!props.isOpen ? `#fff` : `#5E7BC7`)};
  border: ${(props) =>
    !props.isOpen ? `3px solid #5E7BC7` : `3px solid #C4C4C4`};
  margin-bottom: 15px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SButtonFav = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => (!props.isOpen ? `#C75E5E` : `#fff`)};
  color: ${(props) => (!props.isOpen ? `#fff` : `#C75E5E`)};
  border: ${(props) =>
    !props.isOpen ? `3px solid #C75E5E` : `3px solid #C4C4C4`};
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SCards = styled.div`
  overflow-y: auto; /* Включаем прокрутку по вертикали */
  scrollbar-width: none; /* Скрываем полосу прокрутки */
  height: 615px;
`;

export const SButtonSearchMobile = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => (!props.isOpen ? `#5E7BC7` : `#fff`)};
  color: ${(props) => (!props.isOpen ? `#fff` : `#5E7BC7`)};
  border: ${(props) =>
    !props.isOpen ? `3px solid #5E7BC7` : `3px solid #C4C4C4`};
  position: absolute;
  bottom: 40px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SButtonFavMobile = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) => (!props.isOpen ? `#C75E5E` : `#fff`)};
  color: ${(props) => (!props.isOpen ? `#fff` : `#C75E5E`)};
  border: ${(props) =>
    !props.isOpen ? `3px solid #C75E5E` : `3px solid #C4C4C4`};
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 95px;
`;
