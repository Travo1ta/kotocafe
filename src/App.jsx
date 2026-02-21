import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { defaultTheme } from "./theme/default";
import PageWrapper from "./components/layout/page-wrapper/page-wrapper";
import gallery from "./mocks/gallery";

function App() {

   return (
      <ThemeProvider theme={defaultTheme}>
         <GlobalStyle />
         <PageWrapper gallery={gallery} />
      </ThemeProvider>
   );
}

export default App;