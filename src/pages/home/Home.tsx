function Home() {
    return (
        <>
            <div className="bg-gradient-to-r from-emerald-300 to-blue-100 flex justify-center min-h-screen shadow-[0px_2px_15px_rgba(0,0,0,0.3)]">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800 items-center px-4 py-8">
                    <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                        <h2 className="text-5xl font-bold drop-shadow-md">
                            Boas Vindas!
                        </h2>
                        <p className="text-xl font-medium">
                            Quem compra, confia!
                        </p>

                        <div className="flex gap-4">
                            <button className="bg-green-500 hover:bg-green-700 text-gray-800 font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                                Novo Produto
                            </button>
                            <button className="bg-blue-400 hover:bg-blue-600 text-gray-800 font-bold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
                                Ver Produtos
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://i.imgur.com/8eFEBKL.png"
                            alt="Imagem Página Home"
                            className="w-[150%] max-w-md drop-shadow-lg md:max-w-lg"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
