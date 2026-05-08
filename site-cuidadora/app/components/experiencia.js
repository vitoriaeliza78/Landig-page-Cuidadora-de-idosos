import Image from "next/image";

export default function Experiencia() {
    return(
        <section id="experiencia" className=" bg-[#122432]">
        <div className="container mx-auto w-full h-full flex justify-center items-center px-7">
                <h1 className="font-texto text-4xl md:text-5xl text-white text-center py-13">
                    Experiência
                </h1>
            </div>
            <div className="container mx-auto w-full h-full grid grid-cols-1 md:grid-cols-2 gap-6 px-3 pb-10">
                {/* Card 1 */}
                <div className="bg-white px-3 py-10 flex flex-col justify-center items-center text-center rounded-2xl lg:w-xl gap-3">
                    <div>
                        <Image
                            src="/card-1.png"
                            width={50}
                            height={50}
                            alt="sondas"
                            className="lg:w-18"
                        />
                        
                    </div>
                    <h2 className="text-[#122432] font-texto text-xl font-bold">
                        Sondas e GTT
                    </h2>
                    <p>
                        Capacitação e experiência no manuseio de sondas de alimentação (GTT), garantindo nutrição segura e higiene local.
                    </p>
                </div>
                {/* Card 2 */}

                <div className="bg-white px-3 py-6 flex flex-col justify-center items-center text-center rounded-2xl lg:w-xl gap-3">
                    <div>
                        <Image
                            src="/card-2.png"
                            width={50}
                            height={50}
                            alt="saúde mental"
                            className="lg:w-18"
                        />
                        
                    </div>
                    <h2 className="text-[#122432] font-texto text-xl font-bold">
                        Especialista em Saúde Mental
                    </h2>
                    <p>
                       Vasta experiência com Alzheimer e Parkinson. Foco total na segurança, estímulo da memória e bem-estar emocional, oferecendo suporte em todas as fases da doença.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white px-3 py-6 flex flex-col justify-center items-center text-center rounded-2xl lg:w-xl gap-3">
                    <div>
                        <Image
                            src="/card-3.png"
                            width={50}
                            height={50}
                            alt="Cuidados com a Higiene Pessoal"
                            className="lg:w-18"
                        />
                    </div>
                    <h2 className="text-[#122432] font-texto text-xl font-bold">
                        Cuidados com Acamados
                    </h2>
                    <p>
                        Atenção humanizada para acamados, focando em prevenção de escaras, higiene minuciosa e conforto para manutenção da saúde.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white px-3 py-6 flex flex-col justify-center items-center text-center rounded-2xl lg:w-xl gap-3">
                    <div>
                        <Image
                            src="/card-4.png"
                            width={50}
                            height={50}
                            alt="Cuidados com a Higiene Pessoal"
                            className="lg:w-18"
                        />
                    </div>
                    <h2 className="text-[#122432] font-texto text-xl font-bold">
                        Cuidados com a Higiene Pessoal
                    </h2>
                    <p>
                        Experiência em auxiliar no cuidado diário com higiene pessoal, incluindo banho, escovação de dentes e cuidados com a pele, promovendo conforto e bem-estar.
                    </p>
                </div>
            </div>
        </section>
);
}