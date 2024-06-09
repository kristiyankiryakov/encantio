import { ToastContainer } from 'react-toastify';
import useProduct from '../../../hooks/useProduct';
import useProductImages from '../../../hooks/useProductImages';
import ImageHelper from './ImageHelper';
import ProductDetails from './ProductDetails';
import ProductImages from './ProductImages';
import SaveOrDiscard from './SaveOrDiscard';
import TextInformation from './TextInformation';
import Thumbnail from './Thumbnail';

const Single = () => {

    const { product, setProduct } = useProduct();
    const { productImages, setProductImages, dragImage, draggedOverImage, thumbnail, setThumbnail } = useProductImages();
    const imageHelper = new ImageHelper(product, setProduct, productImages, setProductImages, dragImage, setThumbnail, draggedOverImage);

    return (
        <div className='w-full p-10'>
            <p className='text-3xl font-medium mb-10'>Edit Products</p>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>

                <div className='lg:col-span-3 space-y-6'>

                    <TextInformation />


                    <ProductDetails />


                    <ProductImages product={product} dragImage={dragImage} draggedOverImage={draggedOverImage} productImages={productImages} setProductImages={setProductImages} imageHelper={imageHelper} />

                </div>

                <Thumbnail product={product} imageHelper={imageHelper} thumbnail={thumbnail} setThumbnail={setThumbnail} />


            </div>
            <SaveOrDiscard product={product} />

            <ToastContainer />
        </div >

    )
}

export default Single