import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../services/ProductHelper';
import { Product } from '../../../types/Product';

type Props = {
    product: Product
}

const SaveOrDiscard = ({ product }: Props) => {

    const navigate = useNavigate();
    const handleSaving = async () => {
        const response = await createProduct(product);
        if (response && response.data.id) {
            navigate(`/manage/products/${response.data.id}`)
        }
    }

    return (

        <div className='flex justify-end mt-10 space-x-4'>
            <Button
                color="warning" className='dark:bg-warning' >Discard</Button>
            <Button onClick={handleSaving} color='gray' className='dark:bg-green-400 dark:text-white'
            >Save Changes
            </Button>
        </div>
    )
}

export default SaveOrDiscard