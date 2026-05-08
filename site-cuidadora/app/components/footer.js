import { Mail, MessageSquare, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 flex flex-col" id="contato">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-12">
        {/* Coluna 1 */}
        <div>
          <h3 className="font-texto font-bold text-4xl text-[#1a2634]">CUIDADORA</h3>
          <p className="font-texto text-xl text-gray-800">Alessandra Peixoto</p>
        </div>

        {/* Coluna 2*/}
        <div>
          <h4 className="font-bold text-[#1a2634] mb-4 text-lg">Links</h4>
          <ul className="space-y-3 text-gray-600">
            <li><a href="#inicio" className="hover:text-green-500">Início</a></li>
            <li><a href="#sobre" className="hover:text-green-500">Sobre mim</a></li>
            <li><a href="#experiencia" className="hover:text-green-500">Experiência</a></li>
            <li><a href="#formulario" className="hover:text-green-500">Formulário</a></li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h4 className="font-bold text-[#1a2634] mb-4 text-lg">Contato</h4>
          <ul className="space-y-4 text-gray-600">

            <li className="flex items-center gap-3">
              <Mail className="text-gray-700" size={24} />
              <a 
               href="https://mail.google.com/mail/?view=cm&fs=1&to=nevesalessandra400@gmail.com"
               target='_blank'
               rel='noopener noreferrer'
               className="hover:text-green-500 transition-colors cursor-pointer">
                nevesalessandra400@gmail.com
              </a>
            </li>
            
            <li className="flex items-center gap-3">
              <MessageSquare className="text-gray-700 font-bold" size={24} />
              <a
               href='https://wa.me/5561981777634?text=Olá, Alessandra! Vim pelo seu site e gostaria de mais informações.'
               target='_blank'
               rel='noopener noreferrer'
               className="hover:text-green-500 transition-colors cursor-pointer"
              >
                <span >(61) 98177-7634</span>
              </a>
            </li>
            
            <li className="flex items-center gap-3 text-[#1a2634] font-semibold">
              <MapPin className="text-green-500" size={24} />
              <span>Atendimentos Brasília e região</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Faixa de Copyright */}
      <div className="w-full bg-[#a8b8b0] py-4 text-center text-[#1a2634] font-medium text-sm mt-auto">
        Desenvolvido por Vitória Elizangela © 2026
      </div>
    </footer>
  );
}