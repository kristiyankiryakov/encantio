import { Label, Radio } from "flowbite-react"
import { DefaultProduct, Product } from "../ProductType"
import { handleChange } from "./ProductHelperService"


type Props = {
    product: Product | DefaultProduct
    setProduct: React.Dispatch<React.SetStateAction<Product | DefaultProduct>>
}

const ProductDetails = ({
    product, setProduct
}: Props) => {
    return (
        <div className='bg-[#1d2127] p-6 rounded-md shadow-md'>
            <div className='flex justify-between'>
                <fieldset className="flex max-w-md gap-4">
                    <legend className="mb-4 text-gray-300">Should the product appear on the landing</legend>
                    <div className="flex items-center gap-2 ">
                        <Radio id="featured" name="featured"
                            className='cursor-pointer'
                            value={'true'}
                            checked={product.featured === true}
                            onChange={(e) => handleChange(e, setProduct)}
                        />
                        <Label className='cursor-pointer' htmlFor="featured">Featured</Label>
                    </div>

                    <div className="flex items-center gap-2">
                        <Radio className='cursor-pointer' id="not-featured" name="featured"
                            value={'false'}
                            checked={product.featured === false}
                            onChange={(e) => handleChange(e, setProduct)}
                        />
                        <Label className='cursor-pointer' htmlFor="not-featured">Not featured</Label>
                    </div>
                </fieldset>

                <div className='flex gap-5'>
                    <div>
                        <label className='block text-gray-300'>Stock</label>
                        <input name="stock" value={product.stock} onChange={(e) => handleChange(e, setProduct)} type='number' className='w-full mt-1 p-2 border bg-[#374151] border-gray-500 rounded-md' />
                    </div>



                    <div>
                        <label className='block text-gray-300'>Price</label>
                        <input name="price" value={product.price} onChange={(e) => handleChange(e, setProduct)} type='number' className='w-full mt-1 p-2 border bg-[#374151] border-gray-500 rounded-md' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails