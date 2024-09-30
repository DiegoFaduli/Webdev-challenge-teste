import React, { useEffect } from 'react';

const drivers = [
    { name: 'Pascal Wehrlein', odds: 1.11 },
    { name: 'Mitch Evans', odds: 1.34 },
    { name: 'Nick Cassidy', odds: 1.64 },
    { name: 'Olivier Rowland', odds: 2.02 },
    { name: 'Jean Éric Vergne', odds: 2.49 },
    { name: 'Antônio Félix da Costa', odds: 3.11 },
    { name: 'Jake Dennis', odds: 3.38 },
    { name: 'Maximilian Günther', odds: 4.90 },
    { name: 'Robin Frijns', odds: 5.55 },
    { name: 'Stoffel Vandoorne', odds: 6.00 }
];

const BetList2 = () => {
    useEffect(() => {
        const stars = document.querySelectorAll('.Star');

        stars.forEach(star => {
            star.addEventListener('click', function () {
                if (this.style.color === 'yellow') {
                    this.style.color = ''; 
                } else {
                    this.style.color = 'yellow';
                }
            });
        });

        return () => {
            stars.forEach(star => {
                star.removeEventListener('click', () => {});
            });
        };
    }, []);

    return (
        <>
            <div className="max-w-[1230px] mx-auto bg-gradient-to-b from-[#0a1b3f] to-[#0d2155] p-5 rounded-lg border border-[rgba(0,0,0,0.2)] shadow-[0_0_5px_rgba(0,0,0,0.5)] mt-10">
                <ul className="list-none p-0 m-0">
                    {drivers.map((driver, index) => (
                        <li key={index} className="flex justify-between items-center py-2.5 border-b border-b-[rgba(255,255,255,0.1)] last:border-b-0 text-white flex-wrap">
                            <span className="flex items-center">
                                <img src="../../../../public/Imagens/formula-1-branco.png" alt="icon" className="w-5 h-5 mr-2.5" />
                                {driver.name}
                            </span>
                            <span className="flex items-center mt-2">
                                <span className="bg-[#4578dc] px-4 py-1.5 rounded-full text-white font-bold text-base mr-2.5">
                                    {driver.odds.toFixed(2)}
                                </span>
                                <span className="Star item text-[30px] text-black cursor-pointer transition-colors duration-200" data-value="1">&#9733;</span>
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center items-center mt-4">
                    <button className='w-full md:w-[200px] h-[50px] flex justify-center items-center p-4 text-[19px] font-normal bg-[#486ac0] text-white rounded-lg border-none cursor-pointer mb-3'>
                        Mais corredores
                    </button>
                </div>
            </div>
            <div className="pb-10"></div>
        </>
    );
};

export default BetList2;
