import {
  List,
  ListRowRenderer,
  // AutoSizer
} from 'react-virtualized';
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }> | undefined;
  onAddToWishList: (id: number | undefined) => void;
}
export function SearchResults({ results, onAddToWishList, totalPrice }: SearchResultsProps) {

  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results?.[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    )
  };

  return (
    <div>
      <h2>{totalPrice}</h2>

      {/* @ts-ignore */}
      <List
        height={300} //altura da lista - se quiser ocupar o tamanho todo utilizar o AutoSizer do react-virtualized
        width={900} //largura da lista - se quiser ocupar o tamanho todo utilizar o AutoSizer do react-virtualized
        rowHeight={30} //altura de cada linha da lista
        overscanRowCount={5} //quantidade de itens que queremos que a aplicação tenha pré-carregado para quando o usuário der scroll pra cima ou para baixo - 5 é um bom valor
        rowCount={results?.length || 0} //tamanho total da lista
        rowRenderer={rowRenderer} //propriedade que recebe uma função que retorna os componentes a serem renderizados
      />
    </div>
  )
}