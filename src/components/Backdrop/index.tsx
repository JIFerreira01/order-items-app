/* eslint-disable no-debugger */
import { FC, ReactNode, useEffect } from "react";

import { Container, Text, Header, Button } from "./styles";
import { useGlobalReorder } from "../../context";

interface BackdropProps {
  children: ReactNode;
}

export const Backdrop: FC<BackdropProps> = ({ children }) => {
  const stateReorder = useGlobalReorder();
  const handleDispatch = () => {
    stateReorder.setActions({...stateReorder.actions, combine: false})
  }

  useEffect(() => {
  }, [stateReorder.actions.transition])

  return (
    <Container>
        <Header>
          <Text>Combinar</Text>
          <Button id="button__combine--clear" onClick={() => handleDispatch()} aria-hidden={stateReorder.actions.combine ? true : false}>Limpar</Button>
        </Header>
      {children}
    </Container>
  );
}
