import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
  return ( 
    <nav className='fixed'> {/* Links de navegação */}
        <div>
            <div>
                <Link href="#">Início</Link>
                <Link href="#">Sobre mim</Link>
                <Link href="#">Experiência</Link>
                <Link href="#">Formulário</Link>
                <Link href="#">Contato</Link>
            </div>
            <div>
                <button>
                    ORÇAMENTO
                </button>
            </div>

            {/*Botão hamburguer*/}
            <div>
                <button>
                    <Menu size={28} />
                </button>
            </div>
        </div>
    </nav>
  );
}