import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="w-full flex justify-center py-4 bg-emerald-500 text-white shadow-2xl">
                <div className="container flex justify-between items-center text-lg">
                    <Link 
                        to="/home" 
                        className="text-2xl font-bold text-emerald-50 hover:text-emerald-100 transition-colors"
                    >
                        Pharmasil
                    </Link>
                    <div className="flex gap-6">
                        <Link 
                            to="/categorias" 
                            className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105"
                        >
                            Categorias
                        </Link>
                        <Link 
                            to="/cadastrarcategoria" 
                            className="bg-blue-400 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all transform hover:scale-105"
                        >
                            Cadastrar Categoria
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
