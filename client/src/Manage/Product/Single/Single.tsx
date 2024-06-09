import { Button, FileInput, Label } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useProduct from '../../../hooks/useProduct';
import useProductImages from '../../../hooks/useProductImages';
import { DefaultProduct } from '../ProductType';
import ImageHelper from './ImageHelper';
import ProductDetails from './ProductDetails';
import { createProduct } from './ProductHelperService';
import ProductImages from './ProductImages';
import TextInformation from './TextInformation';
import Thumbnail from './Thumbnail';

const Single = () => {

    const { data: product, setData: setProduct } = useProduct();


    const { productImages, setProductImages, dragImage, draggedOverImage, thumbnail, setThumbnail } = useProductImages();

    const imageHelper = new ImageHelper(product, setProduct, productImages, setProductImages, dragImage, setThumbnail, draggedOverImage);


    const navigate = useNavigate();


    return (
        <div className='w-full p-10'>
            <p className='text-3xl font-medium mb-10'>Edit Products</p>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>

                <div className='lg:col-span-3 space-y-6'>

                    <TextInformation product={product} setProduct={setProduct} />


                    <ProductDetails product={product} setProduct={setProduct} />


                    <ProductImages product={product} dragImage={dragImage} draggedOverImage={draggedOverImage} productImages={productImages} setProductImages={setProductImages} imageHelper={imageHelper} />

                </div>

                <Thumbnail product={product} imageHelper={imageHelper} thumbnail={thumbnail} setThumbnail={setThumbnail} />


            </div>

            <div className='flex justify-end mt-10 space-x-4'>
                <Button
                    color="warning" className='dark:bg-warning' >Discard</Button>
                <Button onClick={() => {
                    createProduct(product as DefaultProduct).then((r) => navigate(`/manage/products/${r?.data.id}`));

                }} color='gray' className='dark:bg-green-400 dark:text-white'
                >Save Changes
                </Button>
            </div>

            <ToastContainer />
        </div >

    )
}

export default Single