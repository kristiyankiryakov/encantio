import { useRef, useState } from "react";

const useProductImages = () => {


    const [productImages, setProductImages] = useState<File[] | null>(null);
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const dragImage = useRef(0);
    const draggedOverImage = useRef(0);

    return { productImages, setProductImages, dragImage, draggedOverImage, thumbnail, setThumbnail }
}

export default useProductImages