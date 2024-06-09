import { FloatingLabel } from 'flowbite-react'
import useProductStore from '../../../stores/ProductStore'
import { handleChange } from './ProductHelperService'


const TextInformation = () => {

    const { product, setProduct } = useProductStore();

    return (
        <div className='bg-[#1d2127] p-6 rounded-md shadow-md'>
            <h2 className='text-xl font-semibold mb-4'>Basic Information</h2>
            <FloatingLabel
                variant="filled"
                label="Title"
                inputMode='text'
                name='name'
                value={product.name}
                onChange={(e) => handleChange(e, setProduct)}
            // helperText="Remember, contributions to this topic should follow our Community Guidelines."
            />

            <div className='mb-4'>
                <label className='block text-gray-700'>Description</label>
                <textarea
                    name={'description'}
                    value={product.description}
                    onChange={(e) => handleChange(e, setProduct)}
                    placeholder='Enter the description of the product.' className='w-full mt-1 p-2 border border-gray-500 rounded-md bg-[#374151] focus:outline-none' rows={5}></textarea>
            </div>

        </div>
    );

}

export default TextInformation