import Link from 'next/link';
import {Menu}  from 'lucide-react';

export default function Header() {
  return ( 
    <nav className='fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm'> {/* Links de navegação */}
        <div className='container mx-auto px-4 h-15 '>
            <div className='flex items-center justify-center gap-6'>
                <div className='gap-6'>
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
                    <button className='md:hidden'>
                        <Menu size={28} />
                    </button>
                </div>
            </div>
        </div>
    </nav>
  );
}