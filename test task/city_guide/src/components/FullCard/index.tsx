import React from 'react';
import {
    SCard, SCardMedia, SCardHeader, SCardContent, SText, 
    SCardActions, SButtonFav, SButtonGeo
} from "./styled";
import { IoMdBookmark } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const FullCard = () => {

  return (
    <SCard>
        <SCardContent>
            <SCardMedia
                component="img"
                image="https://masterpiecer-images.s3.yandex.net/c352b1b9801c11ee9607720ccb3e265f:upscaled"
            />
            <SCardHeader>Фантаcмагарический музей им. П.М. Машерова</SCardHeader>
            <SText>Lörem ipsum jere. Intrabel peraktiv pävufåsk läslov pide. Exon prelogi. 
                Någonstansare  begöpp. Homoadoption tesände keck såsom köttrymden. Epigen digon fast</SText>
        </SCardContent>
        <SCardActions>
        <SButtonFav>
          <IoMdBookmark /> Сохранено
        </SButtonFav>
        <SButtonGeo>
          <FaLocationDot /> Маршрут
        </SButtonGeo>
      </SCardActions>
    </SCard>
  );
}

export default FullCard;