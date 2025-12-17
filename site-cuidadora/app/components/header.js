import Link from 'next/link';
import {Menu }  from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return ( 
    <header>
      <nav className='fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm'>
        <div className='container mx-auto px-2 h-15 flex items-center justify-between'>
            
            <div className="w-48 hidden md:block"></div>

            {/* BLOCO CENTRO */}
            <div className='hidden md:flex flex-1 justify-center items-center'>
                <ul className='flex justify-center items-center gap-8'>
                    <li>
                        <Link href="#home" className='text-[#122432] font-titulo text-lg transition-colors'>Início</Link>
                    </li>
                    <li>
                        <Link href="#sobre" className='text-[#122432] font-titulo text-lg transition-colors'>Sobre mim</Link>
                    </li>
                    <li>
                        <Link href="#experiencia" className='text-[#122432] font-titulo text-lg transition-colors'>Experiência</Link>
                    </li>
                    <li>
                        <Link href="#formulario" className='text-[#122432] font-titulo text-lg transition-colors'>Formulário</Link>
                    </li>
                    <li>
                        <Link href="#contato" className='text-[#122432] font-titulo text-lg transition-colors'>Contato</Link>
                    </li>
                </ul>
            </div>

            {/* BLOCO DIREITA */}
            <div className='w-48 flex justify-end items-center gap-4 ml-auto md:ml-0'>
                
                <div className='flex items-center gap-2'>
                    <FaWhatsapp size={15}/>
                    <Link href="#orcamento" className='bg-green-600 rounded-full text-white px-8 py-2 font-bold hover:bg-green-700 transition shadow-md text-sm'>
                    
                        ORÇAMENTO
                    </Link>
                </div>

                {/* Botão Hamburguer */}
                <button className='md:hidden text-[#122432]'>
                    <Menu size={32} />
                </button>
            </div>

        </div>
      </nav>
    </header>
  );
}