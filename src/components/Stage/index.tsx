import { FC } from "react";

import { Container, Image, PriceTag } from "./styles";
import { Loading } from "../Loading";
import { useGlobalReorder } from "../../context";
import { StageProps } from "../../interfaces";



export const Stage: FC<StageProps> = ({ imageUrl, currentPrice }) => {
  const context = useGlobalReorder();
  const currentPriceCleared = Number(currentPrice.split("R$ ").join(""));
  return (
    <Container>
      {/* {<Loading data-details="stage" />} */}
      {context.actions.transition && <Loading data-details="stage" />}
      <Image data-testid="image" src={imageUrl} alt="" />
      {currentPriceCleared > 0 &&
        (<PriceTag data-testid="tag">{currentPrice}</PriceTag>)
      }
    </Container>
  );
}
