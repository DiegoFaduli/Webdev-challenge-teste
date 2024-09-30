import React, { useEffect } from 'react';

const drivers = [
    { name: 'Pascal Wehrlein', odds: 1.23 },
    { name: 'Mitch Evans', odds: 1.56 },
    { name: 'Nick Cassidy', odds: 1.90 },
    { name: 'Olivier Rowland', odds: 2.01 },
    { name: 'Jean Éric Vergne', odds: 2.19 },
    { name: 'Antônio Félix da Costa', odds: 2.22 },
    { name: 'Jake Dennis', odds: 2.38 },
    { name: 'Maximilian Günther', odds: 3.40 },
    { name: 'Robin Frijns', odds: 4.76 },
    { name: 'Stoffel Vandoorne', odds: 4.89 }
];

const BetList = () => {
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
            <div className="mx-auto bg-gradient-to-b from-[#0a1b3f] to-[#0d2155] p-5 rounded-lg border border-[rgba(0,0,0,0.2)] shadow-[0_0_5px_rgba(0,0,0,0.5)] mt-10 max-w-[1230px]">
                <ul className="list-none p-0 m-0">
                    {drivers.map((driver, index) => (
                        <li key={index} className="flex justify-between items-center py-2.5 border-b border-b-[rgba(255,255,255,0.1)] last:border-b-0 text-white">
                            <span className="flex items-center">
                                <img src="../../../../public/Imagens/formula-1-branco.png" alt="icon" className="w-5 h-5 mr-2.5" />
                                <span className="text-sm md:text-base">{driver.name}</span>
                            </span>
                            <div className="flex items-center">
                                <span className="bg-[#4578dc] px-4 py-1.5 rounded-full text-white font-bold text-base mr-2.5">
                                    {driver.odds.toFixed(2)}
                                </span>
                                <span className="Star item text-[30px] text-black cursor-pointer transition-colors duration-200" data-value="1">&#9733;</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pb-10"></div>
        </>
    );
};

export default BetList;
