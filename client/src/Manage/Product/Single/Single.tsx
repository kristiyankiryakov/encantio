import { Button, FileInput, FloatingLabel, Label, Radio } from 'flowbite-react';

import { HiTrash } from "react-icons/hi";
import ProductHelper from './HelperService';

import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import useManageProduct from '../../../hooks/useManageProduct';
import { DefaultProduct } from '../ProductType';


type Props = {}


const Single = (props: Props) => {

    const { product, setProduct, productImages, setProductImages, thumbnail, setThumbnail, draggable, setDraggable, dragImage, draggedOverImage, currentImages } = useManageProduct();
    const helper = new ProductHelper(product, setProduct, productImages, setProductImages, setThumbnail, dragImage, draggedOverImage);
    const navigate = useNavigate();


    return (
        <div className='w-full p-10'>
            <p className='text-3xl font-medium mb-10'>Edit Products</p>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>

                <div className='lg:col-span-3 space-y-6'>
                    <div className='bg-[#1d2127] p-6 rounded-md shadow-md'>
                        <h2 className='text-xl font-semibold mb-4'>Basic Information</h2>
                        <FloatingLabel
                            variant="filled"
                            label="Title"
                            inputMode='text'
                            name='name'
                            value={product.name}
                            onChange={(e) => helper.handleChange(e)}
                        // helperText="Remember, contributions to this topic should follow our Community Guidelines."
                        />

                        <div className='mb-4'>
                            <label className='block text-gray-700'>Description</label>
                            <textarea
                                name={'description'}
                                value={product.description}
                                onChange={(e) => helper.handleChange(e)}
                                placeholder='Enter the description of the product.' className='w-full mt-1 p-2 border border-gray-500 rounded-md bg-[#374151] focus:outline-none' rows={5}></textarea>
                        </div>

                    </div>
                    <div className='bg-[#1d2127] p-6 rounded-md shadow-md'>

                        <div className='flex justify-between'>

                            <fieldset className="flex max-w-md gap-4">
                                <legend className="mb-4 text-gray-300">Should the product appear on the landing</legend>
                                <div className="flex items-center gap-2 ">
                                    <Radio id="featured" name="featured"
                                        className='cursor-pointer'
                                        value={'true'}
                                        checked={product.featured === true}
                                        onChange={(e) => helper.handleChange(e)}
                                    />
                                    <Label className='cursor-pointer' htmlFor="featured">Featured</Label>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Radio className='cursor-pointer' id="not-featured" name="featured"
                                        value={'false'}
                                        checked={product.featured === false}
                                        onChange={(e) => helper.handleChange(e)}
                                    />
                                    <Label className='cursor-pointer' htmlFor="not-featured">Not featured</Label>
                                </div>
                            </fieldset>

                            <div className='flex gap-5'>

                                <div>
                                    <label className='block text-gray-300'>Stock</label>
                                    <input name="stock" value={product.stock} onChange={(e) => helper.handleChange(e)} type='number' className='w-full mt-1 p-2 border bg-[#374151] border-gray-500 rounded-md' />
                                </div>



                                <div>
                                    <label className='block text-gray-300'>Price</label>
                                    <input name="price" value={product.price} onChange={(e) => helper.handleChange(e)} type='number' className='w-full mt-1 p-2 border bg-[#374151] border-gray-500 rounded-md' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#1d2127] p-6 rounded-md shadow-md' >
                        <h2 className='text-xl font-semibold mb-4 text-gray-300'>Product images</h2>

                        <div className='flex flex-wrap gap-5 items-center' >
                            {((product.images || productImages) && currentImages) ? currentImages.map((preview, index) => {
                                const isImageSaved = typeof preview === 'string';

                                return (
                                    <div className='relative' key={`product-container-${index}`}>
                                        <div
                                            draggable
                                            onDragStart={() => {
                                                setDraggable(index);
                                                dragImage.current = index;
                                            }}
                                            onDragEnter={() => draggedOverImage.current = index}
                                            onDragEnd={() => {
                                                helper.handleSort(!isImageSaved);
                                                setDraggable(-1);
                                            }}
                                            className={`${draggable === index ? 'opacity-50 transform scale-12 transition-transform duration-200' : ''} w-56 h-56 rounded-lg flex justify-center items-center`}
                                            key={`prv${index}`}
                                        >
                                            <img
                                                key={`product-image-${index}`}
                                                src={isImageSaved ? preview : URL.createObjectURL(preview)}
                                                alt={`Product ${index + 1}`}
                                                className='w-full h-auto max-w-xs object-cover'
                                            />
                                        </div>

                                        <div
                                            key={`product-icon-${index}`}
                                            // product, productImages, isProduct, setProduct, setProductImages
                                            onClick={() => helper.handleImageDeletion(isImageSaved, index,)}
                                            className='absolute top-1 -right-3 bg-gray-700 p-1 rounded-lg cursor-pointer'
                                        >
                                            <HiTrash size={26} />
                                        </div>
                                    </div>
                                );
                            }) :
                                (!product.images && <div className='flex gap-x-3'>
                                    {[1, 2, 3, 4].map((_, index) => (
                                        <div key={`preview-image-skeleton-${index}`} className='h-24 w-24 border border-1 border-gray-300 rounded-md' >
                                            &nbsp;
                                        </div>
                                    ))}
                                </div>)
                            }

                            <div>

                            </div>
                        </div>

                        <div className='my-3' >
                            <div>
                                <Label htmlFor="file-upload-helper-text" />
                            </div>
                            <FileInput
                                // setProductImages
                                onChange={(e) => helper.handleImageUpload(e, false, setThumbnail,)} multiple
                                id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
                        </div>

                        <div className='flex w-full justify-end' >
                            <Button disabled={!productImages} onClick={() => { helper.uploadFiles(productImages, false); }}
                                color="success" className='dark:bg-success' >Save
                            </Button>
                        </div>
                    </div>

                </div>

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
                                    //setProductImages
                                    onChange={(e) => helper.handleImageUpload(e, true, setThumbnail,)}
                                    id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
                            </div>

                            <div className='flex justify-end w-full' >
                                <Button disabled={!thumbnail} onClick={() => { thumbnail && helper.uploadFiles([thumbnail], true); }}
                                    color="success" className='dark:bg-success' >Save
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className='flex justify-end mt-10 space-x-4'>
                <Button
                    color="warning" className='dark:bg-warning' >Discard</Button>
                <Button onClick={() => {
                    helper.createProduct(product as DefaultProduct).then((r) => navigate(`/manage/products/${r?.data.id}`));

                }} color='gray' className='dark:bg-green-400 dark:text-white'
                >Save Changes
                </Button>
            </div>

            <ToastContainer />
        </div >

    )
}

export default Single