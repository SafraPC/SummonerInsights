import React from "react";
import { Page } from "../../components/Page";
import { ButtonContainer, Container, Content, Input, Title } from "./styles";
import { ContinueButton } from "../../components/ContinueButton";

const Login: React.FC = () => {
  return (
    <Page>
      <Container>
        <Content>
          <Title>Insira o nome de usuário e a tagline do invocador</Title>
          <Input placeholder="NOME DO USUÁRIO" />
          <Input placeholder="TAGLINE" />
          <ButtonContainer>
            <ContinueButton isDisabled={false} isLoading={false} onPress={() => console.log("pressionou")} />
          </ButtonContainer>
        </Content>
      </Container>
    </Page>
  );
};

export { Login };
