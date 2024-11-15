import type { Metadata } from "next";
import Cabecalho from "../components/cabecalho/cabecalho";
import Rodape from '../components/rodape/rodape';

export const metadata: Metadata = {
    title: "Ecolar",
    description: "Feito com amor para o prof Ale<3",
    icons: "/img/logo.png"
  };

export const viewport = {
    width: "device-width",
    initialScale: 5.0,
    colorScheme: "light"
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="pt-br">
          <body>
            <Cabecalho/>
            {children}
            <Rodape/>
           </body>
        </html>
      );
}