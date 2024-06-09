import { Button, FileInput, Label } from 'flowbite-react';
import { DefaultProduct, Product } from '../ProductType';
import ImageHelper from './ImageHelper';
import ImagesList from './ImagesList';

type Props = {
    product: Product | DefaultProduct
    imageHelper: ImageHelper
    productImages: File[] | null
    dragImage: React.MutableRefObject<number>
    draggedOverImage: React.MutableRefObject<number>
    setProductImages: React.Dispatch<React.SetStateAction<File[] | null>>
}

const ProductImages = ({ product, productImages, dragImage, draggedOverImage, imageHelper, setProductImages }: Props) => {

    return (
        <div className='bg-[#1d2127] p-6 rounded-md shadow-md' >
            <h2 className='text-xl font-semibold mb-4 text-gray-300'>Product images</h2>
            <ImagesList dragImage={dragImage} draggedOverImage={draggedOverImage} imageHelper={imageHelper} product={product} productImages={productImages} />

            <div className='my-3' >
                <div>
                    <Label htmlFor="file-upload-helper-text" />
                </div>
                <FileInput
                    onChange={(e) => setProductImages(e.target.files && Array.from(e.target.files))} multiple
                    id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
            </div>

            <div className='flex w-full justify-end' >
                <Button disabled={!productImages} onClick={() => { imageHelper.uploadFiles(productImages, false); }}
                    color="success" className='dark:bg-success' >Save
                </Button>
            </div>
        </div>
    )
}

export default ProductImages