import "./globals.css";
import Nav  from "./components/nav";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
