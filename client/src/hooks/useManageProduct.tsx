import { useMemo, useRef, useState } from 'react';
import useProduct from './useProduct';

const useManageProduct = () => {

  const { data: product, setData: setProduct } = useProduct();

  const [productImages, setProductImages] = useState<File[] | null>(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const [draggable, setDraggable] = useState(-1);
  const dragImage = useRef(0);
  const draggedOverImage = useRef(0);

  const currentImages = useMemo(() => [...(product.images ?? []), ...(productImages ?? [])], [product.images, productImages]);


  return { product, setProduct, productImages, setProductImages, thumbnail, setThumbnail, draggable, setDraggable, dragImage, draggedOverImage, currentImages };
}

export default useManageProduct