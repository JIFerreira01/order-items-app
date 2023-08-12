import { FC } from "react";

import { Container, Image, PriceTag } from "./styles";

interface StageProps {
  imageUrl: string;
  currentPrice: string;
}

export const Stage: FC<StageProps> = ({ imageUrl, currentPrice }) => {
  const currentPriceCleared = Number(currentPrice.split("R$ ").join(""));
  return (
    <Container>
      <Image data-testid="image" src={imageUrl} alt="" />
      {currentPriceCleared > 0 &&
        (<PriceTag data-testid="tag">{currentPrice}</PriceTag>)
      }
    </Container>
  );
}
