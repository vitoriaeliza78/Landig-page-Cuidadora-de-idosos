export default function Formulario() {
  return (
    <section className="bg-[#a8b8b0] py-16 px-6" id="formulario">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-[#1a2634] mb-4">
          Formulário
        </h2>
        <p className="text-[#1a2634] mb-10 text-lg">
          Sinta-se à vontade. Por favor, descreva com detalhes do <strong className="text-green-500 bg-amber-50 p-1.5 rounded-3xl">paciente</strong> para que eu possa retornar para a família.
        </p>

        <form 
          action="https://formsubmit.co/nevesalessandra400@gmail.com" 
          method="POST" 
          className="bg-white rounded-3xl p-8 md:p-10 text-left shadow-xl flex flex-col gap-5"
        >
          {/* Campos ocultos de configuração do FormSubmit */}
          <input type="hidden" name="_subject" value="Novo Pedido de Orçamento - Site Cuidadora!" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" /> {/* Desativa aquele robô chato do Google */}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nome completo*</label>
            <input 
              type="text" 
              name="Nome" 
              className="w-full bg-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500 transition-all"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
            <input 
              type="email" 
              name="Email"
              className="w-full bg-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Contato (WhatsApp)</label>
            <input 
              type="tel" 
              name="Telefone"
              className="w-full bg-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Detalhes/Diagnóstico</label>
            <textarea 
              name="Mensagem"
              rows={4}
              className="w-full bg-gray-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500 transition-all resize-none"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit"
            formTarget="_blank" 
            className="mt-4 bg-[#21c55e] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors self-center w-full md:w-auto"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
}