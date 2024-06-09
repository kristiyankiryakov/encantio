import { ToastContainer } from 'react-toastify';
import useProduct from '../../../hooks/useProduct';
import ProductDetails from './ProductDetails';
import ProductImages from './ProductImages';
import SaveOrDiscard from './SaveOrDiscard';
import TextInformation from './TextInformation';
import Thumbnail from './Thumbnail';

const Single = () => {

    const { product } = useProduct();

    return (
        <div className='w-full p-10'>
            <p className='text-3xl font-medium mb-10'>Edit Products</p>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>

                <div className='lg:col-span-3 space-y-6'>

                    <TextInformation />


                    <ProductDetails />


                    <ProductImages />

                </div>

                <Thumbnail />


            </div>
            <SaveOrDiscard product={product} />

            <ToastContainer />
        </div >

    )
}

export default Single