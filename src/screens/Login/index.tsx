import React, { useState } from "react";
import { Page } from "../../components/Page";
import { ButtonContainer, Container, Content, Input, Title } from "./styles";
import { ContinueButton } from "../../components/ContinueButton";
import { UseLogin } from "../../business/login";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [tagline, setTagline] = useState<string>("");
  const isDisabled = !username.length || !tagline.length || tagline.includes("#");
  const { handleLogin, loading } = UseLogin();

  return (
    <Page>
      <Container>
        <Content>
          <Title>Insira o nome de usuário e a tagline do invocador</Title>
          <Input placeholder="NOME DO USUÁRIO" onChange={(e) => setUsername(e.target.value)} value={username} />
          <Input placeholder="TAGLINE" onChange={(e) => setTagline(e.target.value)} value={tagline} />
          <ButtonContainer>
            <ContinueButton
              isDisabled={isDisabled}
              isLoading={loading}
              onPress={() => {
                handleLogin(username, tagline);
              }}
            />
          </ButtonContainer>
        </Content>
      </Container>
    </Page>
  );
};

export { Login };
