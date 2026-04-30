import Header from "./components/header";
import Nav from "./components/nav";
import Sobre from "./components/sobre";
import Experiencia from "./components/experiencia";
import Formulario from "./components/formulario";

export default function Home() {
  return (
    <main>
        <Nav/>
        <Header />
        <Sobre />
        <Experiencia />
        <Formulario/>
    </main>
     
  );
}
