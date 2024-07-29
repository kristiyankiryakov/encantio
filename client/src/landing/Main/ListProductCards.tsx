import useFetch from '../../hooks/useFetch';
import { Product } from '../../types/Product';
import ProductCard from './ProductCard';

const ListProductCards = () => {

    const { data } = useFetch<Product[]>(`products`, 'GET');
    const filtered = data?.filter((p) => p.featured);

    return (
        <div className='card-container flex md:flex-row xs:flex-col w-full justify-between items-center gap-2'>
            {filtered && filtered.map((product, index) => {
                return (
                    <ProductCard key={product.description + index} product={product} />
                )
            })}
        </div>
    )
}

export default ListProductCards