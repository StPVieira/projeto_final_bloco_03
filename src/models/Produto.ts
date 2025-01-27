import Categoria from './Categoria';

export default interface Produto {
  id: number;
  nome: string;
  fabricante: string;
  preco: number;
  categoria: Categoria | null;
}