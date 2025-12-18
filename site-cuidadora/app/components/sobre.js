import Image from "next/image";

export default function Sobre() {
    return (
        <section id="sobre" className=" bg-[#B6C9C4]">
            <div className="container mx-auto w-full h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <Image
                            src="/medico.png"
                            alt="Sobre Mim"
                            width={600}
                            height={600}
                        />
                    </div>

                    <div className="flex flex-col justify-center px-8">
                        <h1 className="font-texto text-4xl md:text-5xl text-[#122432] text-start pt-13 pb-2">Muito prazer, sou<br/> <strong className="text-white">Alessandra Peixoto.</strong></h1>
                        <h2 className="font-texto text-2xl md:text-2xl text-[#122432] text-start">Mais de 8 anos dedicados a cuidar de vidas com técnica e coração.</h2>
                        <p className="font-sans regular font-medium sans-serif text-md md:text-md text-[#122432] text-start pt-3 pb-3">Sou cuidadora profissional com certificação e, atualmente, estou cursando Técnico em Enfermagem, unindo o carinho do cuidado diário com conhecimento técnico.</p>
                        <p className="font-sans sans-serif font-medium text-md md:text-md text-[#122432] text-start pb-3">Com mais de 8 anos de experiência em Brasília, construí minha trajetória atendendo famílias que buscam segurança e confiança. Especializei-me em casos complexos, cuidando de pacientes com necessidades especiais, Alzheimer e uso de sondas (GTT).</p>
                        <p className="font-sans sans-serif font-medium text-md md:text-md text-[#122432] text-start pb-13">Meu trabalho vai além da higiene e medicação: ofereço tranquilidade para a família, sabendo que seu ente querido está sendo monitorado por alguém capacitada.</p>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
