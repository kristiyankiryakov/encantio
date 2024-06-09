import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../services/ProductHelper';
import { DefaultProduct, Product } from '../../../types/Product';

type Props = {
    product: Product | DefaultProduct
}

const SaveOrDiscard = ({ product }: Props) => {

    const navigate = useNavigate();

    return (

        <div className='flex justify-end mt-10 space-x-4'>
            <Button
                color="warning" className='dark:bg-warning' >Discard</Button>
            <Button onClick={() => {
                createProduct(product as DefaultProduct).then((r) => navigate(`/manage/products/${r?.data.id}`));

            }} color='gray' className='dark:bg-green-400 dark:text-white'
            >Save Changes
            </Button>
        </div>
    )
}

export default SaveOrDiscard