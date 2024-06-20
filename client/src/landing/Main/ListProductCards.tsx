import useFetch from '../../hooks/useFetch';
import { Product } from '../../types/Product';
import ProductCard from './ProductCard';

const ListProductCards = () => {

    const { data } = useFetch<Product[]>(`products`, 'GET');

    return (
        <div className='card-container flex md:flex-row xs:flex-col w-full justify-between items-center gap-2'>
            {data && data.map((product) => {
                return (
                    <ProductCard key={product.description} product={product} />
                )
            })}
        </div>
    )
}

export default ListProductCards