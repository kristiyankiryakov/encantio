import { Button, FloatingLabel, Label, Radio } from 'flowbite-react';
import useProduct from '../../hooks/useProduct';

type Props = {}


const Single = (props: Props) => {

    const { data: product, setData: setProduct } = useProduct();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setProduct(prevState => ({
            ...prevState,
            [name]: name === 'featured' ? value === 'true' ? true : false : value
        }));
    };


    console.log(product);

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
                            onChange={handleChange}
                        // helperText="Remember, contributions to this topic should follow our Community Guidelines."
                        />

                        <div className='mb-4'>
                            <label className='block text-gray-700'>Description</label>
                            <textarea
                                name={'description'}
                                value={product.description}
                                onChange={handleChange}
                                placeholder='Enter the description of the product.' className='w-full mt-1 p-2 border border-gray-500 rounded-md bg-[#374151] focus:outline-none' rows={5}></textarea>
                        </div>

                    </div>
                    <div className='bg-[#1d2127] p-6 rounded-md shadow-md'>

                        <div className='flex justify-between'>

                            <fieldset className="flex max-w-md flex-col gap-4">
                                <legend className="mb-4">Feature on landing</legend>
                                <div className="flex items-center gap-2">
                                    <Radio id="featured" name="featured"
                                        value={'true'}
                                        checked={product.featured === true}
                                        onChange={handleChange}
                                    />
                                    <Label htmlFor="featured">Featured</Label>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Radio id="not-featured" name="featured"
                                        value={'false'}
                                        checked={product.featured === false}
                                        onChange={handleChange}
                                    />
                                    <Label htmlFor="not-featured">Not featured</Label>
                                </div>
                            </fieldset>

                            <div className='flex gap-5'>

                                <div>
                                    <label className='block text-gray-300'>Stock</label>
                                    <input name="stock" value={product.stock} onChange={handleChange} type='number' className='w-full mt-1 p-2 border bg-[#374151] border-gray-500 rounded-md' />
                                </div>



                                <div>
                                    <label className='block text-gray-300'>Price</label>
                                    <input name="price" value={product.price} onChange={handleChange} type='number' className='w-full mt-1 p-2 border bg-[#374151] border-gray-500 rounded-md' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:col-span-1 space-y-6'>
                    <div className='bg-[#1d2127] p-6 rounded-md shadow-md'>
                        <h2 className='text-xl font-semibold mb-4'>Product Image</h2>
                        <div className='flex flex-col items-center gap-y-3'>
                            <img src='path-to-image' alt='Product' className='mb-4 w-full h-auto max-w-xs rounded-md border border-gray-300' />

                            <div className='flex space-x-2'>
                                <div className='border border-gray-300 p-1 rounded-md'>
                                    <img src='path-to-image' alt='Product thumbnail' className='w-16 h-16 object-cover' />
                                </div>
                                <div className='border border-gray-300 p-1 rounded-md'>
                                    <img src='path-to-image' alt='Product thumbnail' className='w-16 h-16 object-cover' />
                                </div>
                                <div className='border border-gray-300 p-1 rounded-md'>
                                    <img src='path-to-image' alt='Product thumbnail' className='w-16 h-16 object-cover' />
                                </div>
                                <button className='border border-gray-300 p-1 rounded-md flex items-center justify-center w-20 h-20'>
                                    <span>+</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex justify-end mt-10 space-x-4'>
                <Button color="warning" className='dark:bg-warning' >Discard</Button>
                <Button color='gray' className='dark:bg-green-400 dark:text-white' >Save Changes</Button>
            </div>

        </div>

    )
}

export default Single