import React, { PropsWithChildren } from "react";
import { Container } from "./styles";

const Page: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { Page };
