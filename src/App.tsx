import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Transactions } from "./pages/Transactions";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <Transactions />
      </ThemeProvider>
    </>
  );
}

export default App;
