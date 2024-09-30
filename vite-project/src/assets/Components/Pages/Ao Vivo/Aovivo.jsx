import BetList from "../../Container Apostas/ContainerApostas";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

export default function AoVivo() {
    return (
        <>
            <Header />
            <div className="bg-[linear-gradient(to_top,#143896,#000000_100%)] text-white px-4 md:px-16">
                <h1 className="font-bold text-3xl py-12 text-center">Corridas ao vivo</h1>
                <div className="flex items-center justify-center gap-4">
                    <img className="w-[35px] h-[35px]" src="../../../../../public/Imagens/brasil.png" alt="Brasil-img" />
                    <h4 className="text-2xl">Corrida 4 - 2024 São Paulo E-PRIX</h4>
                </div>
                <h4 className="flex items-center justify-center text-2xl mt-5">Vencedor</h4>
                <BetList />
                <h4 className="flex items-center justify-center text-2xl mt-5">Pódio</h4>
                <BetList />
            </div>
            <Footer />
        </>
    );
}
