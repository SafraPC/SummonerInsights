import styled from "styled-components";

export const Container = styled.div`
  flex: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(https://lolstatic-a.akamaihd.net/rso-authenticator-ui/0.50.50/assets/lol_desktop_background_4x.jpg);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 16px;
  justify-content: center;
  min-width: 400px;
  max-width: 50%;
  margin: 0 auto;
  border-radius: 8px;
  background-color: white;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
  width: 85%;
  flex-wrap: wrap;
  text-align: center;
  align-self: center;
  margin-bottom: 34px;
  margin-top: 16px;
`;

export const Input = styled.input`
  padding: 8px;
  background-color: #ededed;
  margin-bottom: 24px;
  width: 90%;
  height: 64px;
  align-self: center;
  font-size: 16px;
  padding: 16px;
  border-radius: 4px;
  font-family: "FF Mark W05", sans-serif;
  font-weight: bold;

  &::placeholder {
    color: #999999;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
