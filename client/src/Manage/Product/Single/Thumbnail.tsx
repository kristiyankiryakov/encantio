import { Button, FileInput, Label } from 'flowbite-react';
import { useState } from 'react';
import useProductStore from '../../../stores/ProductStore';
import { uploadFilesAndGetUrl } from '../../services/ProductHelper';

function Thumbnail() {

    const { product, setProduct } = useProductStore();
    const [thumbnail, setThumbnail] = useState<File | null>(null);

    const handleThumbnailUpload = async () => {
        if (thumbnail) {
            const [url] = await uploadFilesAndGetUrl([thumbnail]) as string[];
            url && setProduct((prev) => ({ ...prev, thumbnail: url }));
            setThumbnail(null);
        }
    }

    return (
        <div className='lg:col-span-1 space-y-6'>

            <div className='bg-[#1d2127] p-6 rounded-md shadow-md'>
                <h2 className='text-lg font-semibold mb-4 text-left text-gray-300'>Select your thumbnail</h2>

                <div className='flex flex-col items-center gap-y-5'>
                    <div className={`h-56 w-56 ${!product.thumbnail && !thumbnail ? ' border border-gray-100 rounded-lg p-2 flex justify-center items-center' : ''}`} >
                        {
                            (product.thumbnail && !thumbnail) ?
                                <img src={product.thumbnail} alt='Thumbnail' className='w-full h-auto max-w-xs object-cover rounded-md' />
                                :
                                thumbnail ?
                                    <img src={URL.createObjectURL(thumbnail)} alt='Thumbnail' className='w-full h-auto max-w-xs object-cover rounded-md' />
                                    :
                                    (!product.thumbnail && !thumbnail) && <p className='text-3xl' >+</p>
                        }
                    </div>

                    <div>
                        <div>
                            <Label htmlFor="file-upload-helper-text" />
                        </div>
                        <FileInput
                            onChange={(e) => setThumbnail(e.target.files && e.target.files[0])}
                            id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
                    </div>

                    <div className='flex justify-end w-full' >
                        <Button disabled={!thumbnail} onClick={handleThumbnailUpload}
                            color="success" className='dark:bg-success' >Save
                        </Button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Thumbnail