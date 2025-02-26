"use client";

import "@/app/globals.css";
import { Roboto } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../store/store";
import { usePathname } from "next/navigation";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const backgroundColor = pathname === "/resultado" ? "#DCF5F2" : "#f8f6fc";
  return (
    <Provider store={store}>
      <html lang="pt-BR">
        <head>
          <title>Tabela Fipe</title>
        </head>
        <body className={roboto.className} style={{ backgroundColor }}>{children}</body>
      </html>
    </Provider>
  );
}