"use client";

import {useState} from 'react';
import Link from 'next/link';
import {Menu, X}  from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Nav() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return ( 
    <header>
        <nav className='fixed top-0 left-0 w-full z-50 bg-white/40 shadow-sm'>
            <div className='container mx-auto px-2 h-15 flex items-center justify-between'>
                
                <div className="w-48 hidden md:block"></div>

                {/* BLOCO CENTRO */}
                <div className='hidden md:flex flex-1 justify-center items-center'>
                    <ul className='flex justify-center items-center gap-8'>
                        <li>
                            <Link href="#inicio" className='text-[#122432] font-titulo text-lg transition-colors hover:text-green-500 transition-all duration-300 hover:scale-105'>Início</Link>
                        </li>
                        <li>
                            <Link href="#sobre" className='text-[#122432] font-titulo text-lg hover:text-green-500 transition-all duration-300 hover:scale-105'>Sobre mim</Link>
                        </li>
                        <li>
                            <Link href="#experiencia" className='text-[#122432] font-titulo text-lg transition-colors hover:text-green-500 transition-all duration-300 hover:scale-105'>Experiência</Link>
                        </li>
                        <li>
                            <Link href="#formulario" className='text-[#122432] font-titulo text-lg transition-colors hover:text-green-500 transition-all duration-300 hover:scale-105'>Formulário</Link>
                        </li>
                        <li>
                            <Link href="#contato" className='text-[#122432] font-titulo text-lg transition-colors hover:text-green-500'>Contato</Link>
                        </li>
                    </ul>
                </div>

                {/* BLOCO DIREITA */}
                <div className='w-48 flex justify-end items-center gap-4 ml-auto md:ml-0'>
                    
                    {/* O botão do WhatsApp fica escondido no mobile bem pequeno para não encavalar, ou você pode deixar */}
                    <div className='hidden sm:block'> 
                    <Link 
                        href="https://wa.me/5561981777634?text=Olá, Alessandra! Vim pelo seu site e gostaria de solicitar um orçamento para os serviços de cuidadora. Poderia me passar mais informações?"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className='bg-green-600 rounded-full flex items-center gap-2 text-white px-6 py-2 font-bold hover:bg-green-700 transition shadow-md text-sm'>
                        <FaWhatsapp size={18}/>
                        ORÇAMENTO
                    </Link>
                    </div>

                    {/* Botão Hambúrguer / Fechar */}
                    <button 
                    className='md:hidden text-[#122432] focus:outline-none'
                    onClick={() => setMenuAberto(!menuAberto)}
                    >
                    {/* Se o menu estiver aberto, mostra o X, senão, mostra o Menu */}
                    {menuAberto ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
                </div>

                {/* --- MENU MOBILE --- */}
                {menuAberto && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col items-center py-6 gap-6 transition-all">
                    <Link href="#inicio" onClick={fecharMenu} className='text-[#122432] font-titulo text-xl font-medium hover:text-green-500'>
                    Início
                    </Link>
                    <Link href="#sobre" onClick={fecharMenu} className='text-[#122432] font-titulo text-xl font-medium hover:text-green-500'>
                    Sobre mim
                    </Link>
                    <Link href="#experiencia" onClick={fecharMenu} className='text-[#122432] font-titulo text-xl font-medium hover:text-green-500'>
                    Experiência
                    </Link>
                    <Link href="#formulario" onClick={fecharMenu} className='text-[#122432] font-titulo text-xl font-medium hover:text-green-500'>
                    Formulário
                    </Link>
                    <Link href="#contato" onClick={fecharMenu} className='text-[#122432] font-titulo text-xl font-medium hover:text-green-500'>
                    Contato
                    </Link>
                </div>
        )}
      </nav>
    </header>
  );
}