import Image from "next/image";

export default function Sobre() {
    return (
        <section id="sobre" className=" bg-[#B6C9C4]">
            <div className="container mx-auto w-full h-full pt-40">
    
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <Image
                            src="/medico.png"
                            alt="Sobre Mim"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
