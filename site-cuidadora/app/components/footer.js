export default function Footer() {
  return (
    <footer className="bg-white pt-16 flex flex-col" id="contato">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-12">
        {/* Coluna 1 */}
        <div>
          <h3 className="font-bold text-xl text-[#1a2634] tracking-widest uppercase">CUIDADORA</h3>
          <p className="text-lg text-gray-800 font-serif">Alessandra Peixoto</p>
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
            <li className="flex items-center gap-2">
              <span>📧</span> nevesalessandra400@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">💬</span> (61) 90000-0000
            </li>
            <li className="flex font-bold items-center gap-2">
              <span >📍</span> Atendimentos Brasília e região
            </li>
          </ul>
        </div>
      </div>

      {/* Faixa de Copyright */}
      <div className="w-full bg-[#a8b8b0] py-4 text-center text-[#1a2634] font-medium text-sm mt-auto">
        Desenvolvido por Vitória Elizangela © 2025
      </div>
    </footer>
  );
}