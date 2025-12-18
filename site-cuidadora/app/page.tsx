import Header from "./components/header";
import Nav from "./components/nav";
import Sobre from "./components/sobre";
import Experiencia from "./components/experiencia";

export default function Home() {
  return (
    <main>
        <Nav/>
        <Header />
        <Sobre />
        <Experiencia />
    </main>
     
  );
}
