import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { Product } from '../types/Product';

type Props = {
    setProductImages: (value: React.SetStateAction<File[] | null>) => void;
    setProduct: (product: Product | ((prev: Product) => Product)) => void;
}

const useDraggable = ({ setProductImages, setProduct }: Props) => {

    const [draggable, setDraggable] = useState(-1);
    const dragImage = useRef(0);
    const draggedOverImage = useRef(0);

    const handleSort = (isSameType: boolean, isSaved: boolean, images: (string | File)[] | null) => {
        if (isSameType) {
            return toast.error('Save all newly added images, so you can make changes in the sequence.', { autoClose: 3000, theme: "dark" })
        }

        if (!images) return;
        const cloneImages = [...images];
        const temp = cloneImages[dragImage.current];
        cloneImages[dragImage.current] = cloneImages[draggedOverImage.current]
        cloneImages[draggedOverImage.current] = temp;
        isSaved ? setProduct((prev) => ({ ...prev, images: cloneImages as string[] })) : setProductImages(cloneImages as File[]);
    }

    return { draggable, setDraggable, dragImage, draggedOverImage, handleSort }
}


export default useDraggable