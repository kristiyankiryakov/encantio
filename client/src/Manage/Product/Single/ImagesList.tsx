import { useMemo } from "react";
import { HiTrash } from "react-icons/hi";
import useDraggable from "../../../hooks/useDraggable";
import useProductStore from "../../../stores/ProductStore";
import { handleImageDeletion, updateProduct } from "../../services/ProductHelper";
import { Product } from "../../../types/Product";

type Props = {
    productImages: File[] | null
    setProductImages: (value: React.SetStateAction<File[] | null>) => void
}

const ImagesList = ({
    productImages, setProductImages
}: Props) => {

    const { product, setProduct } = useProductStore();
    const currentImages = useMemo(() => [...(product.images ?? []), ...(productImages ?? [])], [product.images, productImages]);
    const { dragImage, draggable, draggedOverImage, handleSort, setDraggable } = useDraggable({ setProductImages, setProduct });

    const handleDeletion = async (isImageSaved: boolean, index: number) => {
        const result = await handleImageDeletion(isImageSaved, isImageSaved ? product.images as string[] : productImages as File[], index);
        if (isImageSaved) {
            const savedProduct = await updateProduct({ ...product, images: result } as Product);
            setProduct(savedProduct);
        } else {
            setProductImages(result as File[] | null);
        }
    }

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
                                handleSort(Boolean(product.images && productImages), isImageSaved, currentImages)
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
                            onClick={() => handleDeletion(isImageSaved, index)}
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