import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria);
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    async function deletarCategoria() {
        setIsLoading(true);
        try {
            await deletar(`/categorias/${id}`);
            alert('Categoria apagada com sucesso');
        } catch (error: any) {
            alert('Erro ao deletar a categoria.');
        }
        setIsLoading(false);
        retornar();
    }

    function retornar() {
        navigate("/categorias");
    }

    return (
        <div className="container w-1/3 mx-auto mt-10">
            <h1 className="text-4xl text-center my-4 text-emerald-700">Deletar categoria</h1>
            <p className="text-center font-semibold mb-4 text-emerald-600">
                Você tem certeza de que deseja apagar a categoria a seguir?
            </p>
            <div className="border flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <header className="py-2 px-6 bg-emerald-600 text-white font-bold text-2xl">
                    Categoria
                </header>
                <p className="p-8 text-3xl bg-emerald-100 h-full text-emerald-700">
                    {categoria.descricao}
                </p>
                <div className="flex">
    <button
        className="w-full text-slate-100 bg-gray-400 hover:bg-gray-500 py-2 rounded-none transition-colors"
        onClick={retornar}
    >
        Não
    </button>
    <button
        className="w-full text-slate-100 bg-red-500 hover:bg-red-700 py-2 rounded-none flex items-center justify-center transition-colors"
        onClick={deletarCategoria}
    >
        {isLoading ? (
            <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
            />
        ) : (
            <span>Sim</span>
        )}
    </button>
</div>
            </div>
        </div>
    );
}

export default DeletarCategoria;
