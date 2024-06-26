import React from 'react';
import {
    SCard, SCardMedia, SText, SDiv, SCardHeader, 
    SIconButtonFav, SIconButtonArrow, SCardActions, SCardContent
} from "./styled";
import { IoMdArrowDropright, IoMdBookmark } from "react-icons/io";

const Card = () => {

  const handleBtnClick = () => {
    
  };

  return (
    <SCard>
      <SCardContent>
            <SDiv>
                <SCardMedia
                    component="img"
                    image="https://masterpiecer-images.s3.yandex.net/c352b1b9801c11ee9607720ccb3e265f:upscaled"
                />
                <SCardHeader>Фантаcмагарический музей им. П.М. Машерова</SCardHeader>
            </SDiv>
            <SText>Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. 
                Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast</SText>
      </SCardContent>
      <SCardActions>
        <SIconButtonFav aria-label="add to favorites">
          <IoMdBookmark />
        </SIconButtonFav>
        <SIconButtonArrow aria-label="show more info" onClick={handleBtnClick}>
          <IoMdArrowDropright />
        </SIconButtonArrow>
      </SCardActions>
    </SCard>
  );
}

export default Card;