import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';

const Impactos = () => {
    return (
        <>
            <Header />
            <div className="bg-[linear-gradient(to_top,#143896,#000000_100%)] text-black px-4 md:px-16">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 md:p-16 bg-gradient-to-t from-[#143896] to-black">
                        <Card 
                            title="Frustração e Desconfiança" 
                            content="Interfaces lentas e suporte ineficaz comprometem seriamente a experiência do usuário. Quando o sistema não responde de maneira rápida e eficiente, os usuários se sentem frustrados, e isso pode gerar uma desconfiança em relação à plataforma como um todo. Essa demora, especialmente em momentos críticos, pode levar à insatisfação, pois os usuários esperam agilidade e precisão. A consequência mais imediata é a perda de confiança no serviço oferecido. Além disso, a insatisfação dos usuários pode se traduzir em feedbacks negativos e até mesmo a migração para plataformas concorrentes."
                        />
                        <Card 
                            title="Decisões Mal Informadas" 
                            content="A falta de dados detalhados e informações claras dificulta a tomada de decisões inteligentes por parte dos usuários. Muitas vezes, eles acabam baseando suas apostas em dados insuficientes ou desatualizados, o que aumenta o risco de perdas financeiras. Apostas mal embasadas resultam frequentemente em prejuízos financeiros para o usuário, e a plataforma pode ser vista como pouco confiável. A ausência de informações ricas pode minar a credibilidade da plataforma e prejudicar a experiência do usuário a longo prazo."
                        />
                        <Card 
                            title="Tempo Desperdiçado" 
                            content="Processos de retirada lentos, além de frustração, criam uma sensação de insegurança para o usuário. Quando os tempos de processamento de transações são longos, o usuário pode sentir que a plataforma não é transparente ou eficiente. A experiência de apostas se torna menos prazerosa e mais estressante, o que desestimula o uso contínuo da plataforma. O cliente pode procurar alternativas que ofereçam processos mais rápidos e eficientes."
                        />
                        <Card 
                            title="Soluções" 
                            content="Implementar uma interface rápida, intuitiva e de fácil navegação melhora significativamente a experiência do usuário. Com uma plataforma fluida e ágil, o usuário pode interagir de maneira mais eficiente e sentir maior satisfação durante o uso. O principal benefício é proporcionar uma experiência de apostas agradável e sem frustrações. Um sistema responsivo também aumenta a confiança do usuário, favorecendo a retenção e a lealdade à plataforma."
                        />
                        <Card 
                            title="Apostas Informadas" 
                            content="Oferecer acesso a dados detalhados e análises aprofundadas permite que os usuários tomem decisões mais conscientes. Com ferramentas que agregam valor e facilitam o entendimento dos cenários, o usuário tem mais chances de realizar apostas bem-sucedidas. O aumento da confiança nas apostas resulta diretamente em uma maior chance de ganhos. Além disso, a plataforma é vista como uma aliada no processo de tomada de decisão, o que pode aumentar a satisfação geral."
                        />
                        <Card 
                            title="Transações Eficientes" 
                            content="Garantir um processamento rápido de retiradas e transações financeiras melhora a percepção de confiança na plataforma. Quando o usuário sabe que suas transações serão rápidas e seguras, ele tende a utilizar o serviço com mais frequência. A economia de tempo é clara, mas o principal ganho é a experiência financeira fluida, onde o usuário não precisa se preocupar com atrasos ou complicações. Isso fortalece a imagem da plataforma como uma solução confiável e eficiente."
                        />
                    </div>
                </div>  
            </div>
            <Footer />
        </>
    );
};

const Card = ({ title, content }) => (
    <div className="bg-gray-100 p-5 rounded-lg shadow-md text-left">
        <strong>{title}:</strong>
        <p className="mt-4">{content}</p>
    </div>
);

export default Impactos;
