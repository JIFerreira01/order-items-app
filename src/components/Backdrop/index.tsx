/* eslint-disable no-debugger */
import { FC } from "react";

import { Container, Text, Header, Button } from "./styles";
import { useGlobalReorder } from "../../context";
import { ContextProps } from "../../interfaces";

export const Backdrop: FC<ContextProps> = ({ children }) => {
  const stateReorder = useGlobalReorder();
  const handleDispatch = () => {
    stateReorder.setActions({...stateReorder.actions, combine: false})
  }

  return (
    <Container>
        <Header>
          <Text>Combinar</Text>
          <Button id="button__combine--clear" onClick={() => handleDispatch()} aria-hidden={!stateReorder.actions.combine ? true : false}>Limpar</Button>
        </Header>
      {children}
    </Container>
  );
}
