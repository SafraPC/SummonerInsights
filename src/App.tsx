import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes/router";
import { GlobalStyles } from "./styles/globalStyles";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export { App };
