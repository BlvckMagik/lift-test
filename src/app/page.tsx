"use client";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "@/theme/index";
import App from "@/app/App";
import { store } from "@/shared/store";

import * as Styled from "./page.styled";

export default function Home() {
  return (
    <main>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Styled.Page>
            <App />
          </Styled.Page>
        </ThemeProvider>
      </Provider>
    </main>
  );
}
