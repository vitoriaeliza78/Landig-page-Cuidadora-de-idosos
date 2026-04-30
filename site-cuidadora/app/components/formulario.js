export function Formulario() {
  return (
    <section className="bg-[#a8b8b0] py-16 px-6" id="formulario">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-[#1a2634] mb-4">
          Formulário
        </h2>
        <p className="text-[#1a2634] mb-10 text-lg">
          Sinta-se à vontade. Por favor, descreva com detalhes o paciente para que eu possa retornar com um orçamento.
        </p>

        <form className="bg-white rounded-3xl p-8 md:p-10 text-left shadow-xl flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nome completo*</label>
            <input 
              type="text" 
              className="w-full bg-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500 transition-all"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
            <input 
              type="email" 
              className="w-full bg-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Contato</label>
            <input 
              type="tel" 
              className="w-full bg-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Detalhes/Diagnóstico</label>
            <textarea 
              rows={4}
              className="w-full bg-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none"
            ></textarea>
          </div>
          
          {/* Adicionei um botão de envio que não estava explícito, mas é necessário no form */}
          <button 
            type="submit" 
            className="mt-4 bg-[#21c55e] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors self-center w-full md:w-auto"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}