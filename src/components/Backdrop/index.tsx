import { FC, ReactNode } from "react";

import { Container, Text, Header } from "./styles";
import { useGlobalReorder } from "../../context";

interface BackdropProps {
  children: ReactNode;
}

export const Backdrop: FC<BackdropProps> = ({ children }) => {
  const { clear, setClear } = useGlobalReorder();
  const handleDispatch = () => {
    clear ? setClear(false) : setClear(true);
  }
  return (
    <Container>
      <Header>
        <Text>Combinar</Text>
        <button onClick={() => handleDispatch()}>Limpar</button>
      </Header>
      {children}
    </Container>
  );
}
