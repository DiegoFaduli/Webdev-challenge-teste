import BetList2 from "../../Container Apostas/ContainerApostas2";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

export default function Apostas(){
    return(
        <>
        <Header />
        <div className="bg-[linear-gradient(to_top,#143896,#000000_100%)] text-white px-16 ">
        <h1 className="font-bold text-3xl py-12">Apostas - Formula E</h1>
            <div className="flex items-center gap-8">
                <img className="w-[35px] h-[35px]" src="../../../../../public/Imagens/brasil.png" alt="Brasil-img" />
                <h4 className="text-2xl">Round 1 - 2024 São Paulo E-PRIX</h4>
            </div>
            <div className="flex items-center justify-center mt-5">
            <button className="bg-[#486ac0] rounded-lg text-white p-4 text-base border-none cursor-pointer">Escolha uma opção de aposta</button>
            </div>
            <BetList2 />
            <div className="flex items-center gap-8">
                <img className="w-[35px] h-[35px]" src="../../../../../public/Imagens/mexico.png" alt="Brasil-img" />
                <h4 className="text-2xl">Round 2 - 2024 Mexico City E-PRIX</h4>
            </div>
            <div className="flex items-center justify-center mt-5">
            <button className="bg-[#486ac0] rounded-lg text-white p-4 text-base border-none cursor-pointer">Escolha uma opção de aposta</button>
            </div>
            <BetList2 />
            <div className="flex items-center gap-8">
                <img className="w-[35px] h-[35px]" src="../../../../../public/Imagens/arabia-saudita.png" alt="Brasil-img" />
                <h4 className="text-2xl">Round 3 - 2024 Jeddah E-PRIX</h4>
            </div>
            <div className="flex items-center justify-center mt-5">
            <button className="bg-[#486ac0] rounded-lg text-white p-4 text-base border-none cursor-pointer">Escolha uma opção de aposta</button>
            </div>
            <BetList2 />
            <div className="flex items-center justify-center pb-10">
            <button className="bg-[#486ac0] rounded-lg text-white p-4 text-lg border-none cursor-pointer w-[250px]">Ver mais corridas</button>
            </div>
        </div>
        <Footer />
        </>
    )
}