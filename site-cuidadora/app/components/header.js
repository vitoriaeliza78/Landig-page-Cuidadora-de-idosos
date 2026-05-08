import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  return (
    <div className="relative w-full min-h-screen flex items-center pt-24 md:pt-0 overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 md:hidden">
        <Image 
            src="/Fotinha.png" 
            alt="Fundo Mobile" 
            fill 
            className="object-cover object-top"
            priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="flex flex-col gap-6">

            <h1 className="font-texto text-4xl md:text-6xl text-center md:text-left text-white md:text-[#122432] ">
              A tranquilidade de saber que quem você ama
              <br className="hidden md:block" /> está em boas mãos.
            </h1>

            {/* SUBTÍTULO */}
            <p className="text-center md:text-left text-xl text-white md:text-[#122432]">
              Cuidado especializado para idosos em Brasília e região. <br className="hidden md:block text-[#122432]"/>
              Atendimento domiciliar e hospitalar com experiência em <br className="hidden md:block text-[#122432]"/>
              <strong>Alzheimer, Parkinson e Sondas (GTT).</strong>
            </p>

            <div className="flex justify-center md:justify-start">
              <Link
                href="#"
                className="bg-green-600 rounded-full flex items-center gap-2 text-white px-8 py-3 font-bold hover:bg-green-700 transition shadow-md text-sm hover:scale-105 transform duration-200"
              >
                <FaWhatsapp size={20} />
                CHAMAR NO WHATSAPP
              </Link>
            </div>
          </div>

          <div className="relative w-full h-[300px] md:hidden flex justify-center items-center bg-gray-50 rounded-3xl overflow-hidden">
            <Image
              src="/Fotinha.png"
              alt="Cuidadora de Idosos"
              fill
              className="object-object "
              priority
            />
          </div>

        </div>
      </div>
    </div>
  );
}