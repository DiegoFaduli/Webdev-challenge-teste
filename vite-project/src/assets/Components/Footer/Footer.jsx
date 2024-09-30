export default function Footer() {
    return (
        <>
            <div className="text-white bg-[#282828] py-5">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between p-5 gap-8 md:gap-0">
                        {/* Links Úteis */}
                        <div className="text-center md:text-left">
                            <h4 className="font-bold mb-2 text-xl">Links Úteis</h4>
                            <ul className="flex flex-col items-center md:items-start">
                                <li><a href="#">Central de ajuda</a></li>
                                <li><a href="#">Termos e condições</a></li>
                                <li><a href="#">Segurança</a></li>
                                <li><a href="#">Política de jogo responsável</a></li>
                                <li><a href="#">Política de privacidade</a></li>
                            </ul>
                        </div>

                        {/* Métodos de pagamento */}
                        <div className="text-center md:text-left">
                            <h4 className="font-bold mb-2 text-xl">Métodos de pagamento</h4>
                            <ul className="flex flex-col items-center md:items-start">
                                <li><a href="#">Pix</a></li>
                                <li><a href="#">Boleto</a></li>
                                <li><a href="#">Itaú</a></li>
                                <li><a href="#">Banco do Brasil</a></li>
                                <li><a href="#">Caixa</a></li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div className="text-center md:text-left">
                            <h4 className="font-bold mb-2 text-xl">Social Media</h4>
                            <ul className="flex flex-col items-center md:items-start">
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">X</a></li>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">YouTube</a></li>
                                <li><a href="#">LinkedIn</a></li>
                            </ul>
                        </div>

                        {/* Selos de certificação */}
                        <div className="text-center md:text-left">
                            <h4 className="font-bold mb-2 text-xl">Selos de certificação</h4>
                            <ul className="flex flex-col items-center md:items-start">
                                <li><a href="#">Malta Gaming Authority</a></li>
                                <li><a href="#">UK Gambling Commission</a></li>
                                <li><a href="#">eCOGRA</a></li>
                                <li><a href="#">iTech Labs</a></li>
                                <li><a href="#">GamCare</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
