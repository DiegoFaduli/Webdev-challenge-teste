import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Card from "../Card/card.jsx";
import Simulador from "../Simulador.jsx";
import Carrossel from "../LP/Carrossel/Carrossell.jsx";

export default function LP() {
    const cardsData = [
        {
            title: 'Hoje | 19:00',
            content: 'Vencedor',
            buttons: ['Nick Cassidy - 1.85', 'Pascal Wehrlein - 3.40', 'Oliver Rowland - 5.30', '+'],
        },
        {
            title: 'Amanhã | 21:30',
            content: 'Top 3/Pódio',
            buttons: ['Nick Cassidy - 1.05', 'Jake Dennis - 5.60', 'Mitch Evans - 7.30', '+'],
        },
        {
            title: 'Quinta-feira | 16:30',
            content: 'Melhor volta',
            buttons: ['Nick Cassidy - 1.45', 'Jake Dennis - 9.80', 'Lucas Di Grassi - 15.30', '+'],
        },
    ];

    return (
        <>
            <Header />
            <div className="bg-[linear-gradient(to_top,#143896,#000000_100%)]">
                <div className="flex flex-col lg:flex-row mx-4 md:mx-10 justify-between text-white">
                    <div className="my-10 w-full lg:w-1/2 xl:w-1/3 lg:mx-36"> {/* Adicionado lg:mx-14 para margem de 58px */}
                        <h1 className="text-2xl md:text-3xl font-bold">Informações</h1><br />
                        <p className="text-base md:text-lg">Para melhorar a vizualização da corrida, temos à direita um mini simulador da corrida, onde podemos ver o número de voltas realizadas por cada corredor, a linha de chegada representada pelo retângulo na mesma linha do circulo (que representa a pista) e os quadradinhos coloridos que representam os carros.</p><br />
                        <p className="text-base md:text-lg">Para conhecer mais estatísticas e o funcionamento dos pontos dos competidores em cada corrida, clique no botão abaixo!</p><br />
                        <button className="bg-[#486ac0] text-white p-4 rounded-[10px] text-base md:text-[20px] w-[150px] md:w-[180px] h-[45px] md:h-[50px] flex items-center justify-center border border-[#143896] cursor-pointer">Saiba mais</button>
                    </div>
                    <div className="w-full lg:w-1/2 xl:w-2/3 lg:mx-14 my-10 flex justify-center"> {/* Adicionado lg:mx-14 para margem de 58px */}
                        <Simulador />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-around mx-4 md:mx-10 lg:mx-14"> {/* Adicionado lg:mx-14 para margem de 58px */}
                    {cardsData.map((card, index) =>
                        <Card
                            key={index}
                            title={card.title}
                            content={card.content}
                            buttons={card.buttons}
                        />
                    )}
                </div>
                <h2 className="text-white text-xl md:text-3xl flex justify-center items-center pt-5">Impactos Negativos x Impactos Positivos</h2>
                <div className="text-white flex flex-wrap justify-center items-center py-5 mx-4 md:mx-10 lg:mx-14"> {/* Adicionado lg:mx-14 para margem de 58px */}
                    <button className="m-2 p-2.5 px-4 md:px-5 bg-blue-800 text-white rounded-md cursor-pointer">Frustração e Desconfiança</button>
                    <button className="m-2 p-2.5 px-4 md:px-5 bg-blue-800 text-white rounded-md cursor-pointer">Decisões Mal Informadas</button>
                    <button className="m-2 p-2.5 px-4 md:px-5 bg-blue-800 text-white rounded-md cursor-pointer">Tempo Desperdiçado</button>
                    <button className="m-2 p-2.5 px-4 md:px-5 bg-blue-800 text-white rounded-md cursor-pointer">Soluções</button>
                    <button className="m-2 p-2.5 px-4 md:px-5 bg-blue-800 text-white rounded-md cursor-pointer">Apostas informadas</button>
                    <button className="m-2 p-2.5 px-4 md:px-5 bg-blue-800 text-white rounded-md cursor-pointer">Transações eficientes</button>
                </div>
                <Carrossel />
            </div>
            <Footer />
        </>
    );
}
