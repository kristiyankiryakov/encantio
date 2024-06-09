import { useMemo, useState } from "react";
import { HiTrash } from "react-icons/hi";
import { DefaultProduct, Product } from "../ProductType";
import ImageHelper from "./ImageHelper";

type Props = {
    product: Product | DefaultProduct
    productImages: File[] | null
    dragImage: React.MutableRefObject<number>
    draggedOverImage: React.MutableRefObject<number>
    imageHelper: ImageHelper
}

const ImagesList = ({
    product, productImages, dragImage, draggedOverImage, imageHelper
}: Props) => {

    const currentImages = useMemo(() => [...(product.images ?? []), ...(productImages ?? [])], [product.images, productImages]);
    const [draggable, setDraggable] = useState(-1);

    return (

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
                                imageHelper.handleSort(!isImageSaved);
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
                            onClick={() => imageHelper.handleImageDeletion(isImageSaved, index,)}
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
    )
}

export default ImagesList