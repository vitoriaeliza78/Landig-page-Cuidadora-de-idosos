import "./globals.css";
import Nav  from "./components/nav";
import AosInit from "./components/AosInit";

export const metadata = {
  title: 'Alessandra Peixoto | Cuidadora de Idosos em Brasília',
  description: 'Cuidado especializado e humanizado para idosos em Brasília e região. Experiência com Alzheimer, Parkinson, acamados e uso de sondas (GTT).',
  keywords: [
    'cuidadora de idosos', 
    'Brasília', 
    'Distrito Federal', 
    'DF', 
    'cuidado humanizado', 
    'Alzheimer', 
    'Parkinson', 
    'sonda GTT', 
    'acompanhamento hospitalar',
    'home care'
  ],
  authors: [{ name: 'Vitória Santana' }],
  openGraph: {
    title: 'Alessandra Peixoto | Cuidadora de Idosos',
    description: 'A tranquilidade de saber que quem você ama está em boas mãos. Atendimento em Brasília e região.',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Nav />
        <AosInit />
        {children}
      </body>
    </html>
  );
}
