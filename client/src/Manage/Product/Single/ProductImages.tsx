import { Button, FileInput, Label } from 'flowbite-react';
import { useState } from 'react';
import useProductStore from '../../../stores/ProductStore';
import ImagesList from './ImagesList';
import { uploadFilesAndGetUrl } from '../services/ProductHelper';


const ProductImages = () => {

    const { setProduct } = useProductStore();
    const [productImages, setProductImages] = useState<File[] | null>(null);
    
    const handleProductImagesUpload = async () => {
        const urls = await uploadFilesAndGetUrl(productImages) as string[];
        setProduct((prev) => prev.images ? ({ ...prev, images: [...prev.images, ...urls] }) : (({ ...prev, images: urls })));
        setProductImages(null);
    }

    return (
        <div className='bg-[#1d2127] p-6 rounded-md shadow-md' >
            <h2 className='text-xl font-semibold mb-4 text-gray-300'>Product images</h2>
            <ImagesList setProductImages={setProductImages} productImages={productImages} />

            <div className='my-3' >
                <div>
                    <Label htmlFor="file-upload-helper-text" />
                </div>
                <FileInput
                    onChange={(e) => setProductImages(e.target.files && Array.from(e.target.files))} multiple
                    id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
            </div>

            <div className='flex w-full justify-end' >
                <Button disabled={!productImages} onClick={handleProductImagesUpload}
                    color="success" className='dark:bg-success' >Save
                </Button>
            </div>
        </div >
    )
}

export default ProductImages