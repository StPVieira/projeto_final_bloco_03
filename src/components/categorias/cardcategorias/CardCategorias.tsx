import { Link } from 'react-router-dom';
import Categoria from '../../../models/Categoria';

interface CardCategoriasProps {
    categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <header className="py-2 px-6 bg-emerald-600 text-white font-major-mono text-2xl">
                Categoria
            </header>
            <p className="p-8 text-3xl font-major-mono bg-emerald-100 h-full text-emerald-700">
                {categoria.descricao}
            </p>

            <div className="flex">
                <Link 
                    to={`/editarcategoria/${categoria.id}`} 
                    className="w-full text-slate-100 font-major-mono bg-emerald-500 hover:bg-emerald-700 
                        flex items-center justify-center py-2 rounded-bl-2xl transition-colors"
                >
                    <button>Editar</button>
                </Link>

                <Link 
                    to={`/deletarcategoria/${categoria.id}`} 
                    className="w-full text-slate-100 font-major-mono bg-red-500 hover:bg-red-700 
                        flex items-center justify-center rounded-br-2xl transition-colors"
                >
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardCategorias;
