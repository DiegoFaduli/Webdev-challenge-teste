import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="header bg-black text-white h-auto flex flex-col items-center justify-center text-[26px] md:h-36 md:flex-row md:justify-around">
                <nav className="navegacao flex flex-col items-center md:flex-row md:items-center md:justify-around gap-4 md:gap-24 p-4">
                    {/* Logo */}
                    <Link to="/" className="mb-2 md:mb-0">
                        <img className="logo w-64 h-64 md:w-64 md:h-64" src="../../../../public/Imagens/Logo_Sprint1_sem_fundo.png" alt="logo" />
                    </Link>
                    
                    {/* Links de Navegação */}
                    <div className="flex flex-col md:flex-row md:gap-24">
                        <Link to="/aovivo" className="text-white no-underline">Ao vivo</Link>
                        <Link to="/apostas" className="text-white no-underline">Apostas</Link>
                        <Link to="/impactos" className="text-white no-underline">Impactos</Link>
                        <Link to="/formulae" className="text-white no-underline">Formula-E</Link>
                    </div>
                    
                    {/* Imagem do Usuário */}
                    <button className="btnUser rounded-full w-14 h-14 mt-2 md:mt-0 cursor-pointer" id="BtnUser">
                        <img className="UserIMG rounded-full w-12 h-12" src="../../../../public/Imagens/UserIMG2.png" alt="login img" />
                    </button>
                </nav>
            </div>
        </>
    );
}
