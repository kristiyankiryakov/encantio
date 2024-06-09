// HelperService.ts
import { deleteObject, ref } from "firebase/storage";
import { toast } from 'react-toastify';
import { storage } from '../../../firebase';
import { DefaultProduct, Product } from "../ProductType";

import {
    getDownloadURL,
    ref as storageRef,
    uploadBytesResumable
} from "firebase/storage";
import { v4 as uuid } from 'uuid';
import { updateProduct } from "./ProductHelperService";


class ImageHelper {
    product: Product | DefaultProduct;
    setProduct: React.Dispatch<React.SetStateAction<Product | DefaultProduct>>;
    productImages: File[] | null;
    setProductImages: React.Dispatch<React.SetStateAction<File[] | null>>;
    dragImage: React.MutableRefObject<number>;
    setThumbnail: React.Dispatch<React.SetStateAction<File | null>>;
    draggedOverImage: React.MutableRefObject<number>;

    constructor(
        product: Product | DefaultProduct,
        setProduct: React.Dispatch<React.SetStateAction<Product | DefaultProduct>>,
        productImages: File[] | null,
        setProductImages: React.Dispatch<React.SetStateAction<File[] | null>>,
        dragImage: React.MutableRefObject<number>,
        setThumbnail: React.Dispatch<React.SetStateAction<File | null>>,
        draggedOverImage: React.MutableRefObject<number>,
    ) {
        this.product = product;
        this.setProduct = setProduct;
        this.productImages = productImages;
        this.setProductImages = setProductImages;
        this.setThumbnail = setThumbnail;
        this.dragImage = dragImage;
        this.draggedOverImage = draggedOverImage;
    }


    async handleImageDeletion(isSaved: boolean, index: number) {
        if (isSaved && this.product.images) {
            try {
                const currentSavedImages = this.product.images.filter((_, currIndex) => currIndex !== index);
                const imageToDelete = this.product.images[index];

                // Delete from Firebase Storage
                if (imageToDelete.startsWith('gs://') || imageToDelete.startsWith('http')) {
                    const imageRef = ref(storage, imageToDelete);
                    await deleteObject(imageRef);
                }

                const savedProduct = await updateProduct({ ...this.product, images: currentSavedImages } as Product);
                this.setProduct(savedProduct);
                toast.success('Image deleted successfully!', { autoClose: 1000, theme: 'dark' });

            } catch (err) {
                console.error('Error deleting image:', err);
            }
        }

        if (this.productImages) {
            const filtered = this.productImages.filter((_, currIndex) => currIndex !== index);
            this.setProductImages(filtered.length === 0 ? null : filtered);
        }
    }


    uploadFiles = async (images: File[] | null, isThumbnail: boolean) => {
        if (!images) return;

        const urls: string[] = [];

        await Promise.all(images.map(async (file) => {
            try {
                const imageRef = storageRef(storage, `products/${uuid()}`);
                const snapshot = await uploadBytesResumable(imageRef, file);

                const url = await getDownloadURL(snapshot.ref);

                if (isThumbnail) {
                    this.setProduct((prev) => ({ ...prev, thumbnail: url }))
                    this.setThumbnail(null);
                } else {
                    urls.push(url);
                }

            } catch (error) {
                console.log('Error uploading image:', error);
            }
        }));

        if (!isThumbnail) {
            this.setProduct((prev) => prev.images ? ({ ...prev, images: [...prev.images, ...urls] }) : (({ ...prev, images: urls })));
            this.setProductImages(null);
        }

    };

    handleSort = (isNew: boolean) => {
        if (this.product.images && this.productImages) {
            return toast.error('Save all newly added images, so you can make changes in the sequence.', { autoClose: 3000, theme: "dark" })
        }

        if (isNew) {
            if (!this.productImages) return;
            const cloneImages = [...this.productImages];
            const temp = cloneImages[this.dragImage.current];
            cloneImages[this.dragImage.current] = cloneImages[this.draggedOverImage.current]
            cloneImages[this.draggedOverImage.current] = temp;
            this.setProductImages(cloneImages);
        } else {
            if (!this.product.images) return;
            const cloneImages = [...this.product.images];
            const temp = cloneImages[this.dragImage.current];
            cloneImages[this.dragImage.current] = cloneImages[this.draggedOverImage.current]
            cloneImages[this.draggedOverImage.current] = temp;
            this.setProduct((prev) => ({ ...prev, images: cloneImages }));
        }

    }
}

export default ImageHelper;