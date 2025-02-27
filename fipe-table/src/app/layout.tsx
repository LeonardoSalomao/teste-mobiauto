"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { usePathname } from "next/navigation";

const theme = createTheme({
  palette: {
    background: {
      default: "#f8f6fc",
    },
    text: {
      primary: "#171717",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    allVariants: {
      color: "#171717",
    },
  },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const backgroundColor = pathname === "/resultado" ? "#DCF5F2" : "#f8f6fc";

  return (
    <Provider store={store}>
      <html lang="pt-BR">
        <head>
          <title>Tabela Fipe</title>
        </head>
        <body
          style={{
            backgroundColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            margin: 0,
          }}
        >
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </body>
      </html>
    </Provider>
  );
}
