import { deleteObject, getDownloadURL, ref as storageRef, uploadBytesResumable } from "firebase/storage";
import { toast } from 'react-toastify';
import { v4 as uuid } from "uuid";
import api from "../../api";
import { storage } from "../../firebase";
import { DefaultProduct, Product } from "../../types/Product";


export const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setProduct: (product: Product | DefaultProduct | ((prev: Product | DefaultProduct) => Product | DefaultProduct)) => void) => {

    const { name, value } = e.target;
    setProduct(prevState => ({
        ...prevState,
        [name]: name === 'featured' ? value === 'true' ? true : false : value
    }));
}

export const createProduct = async (product: DefaultProduct) => {
    try {
        const config = {
            method: "POST",
            data: product
        };

        const response = await api<Product>('/products', config);
        toast.success('Save product successfully!', { autoClose: 1000, theme: "dark" });
        return response;
    } catch (err) {
        console.log(err);
    }
}

export const updateProduct = async (data: Product) => {
    try {
        const config = {
            method: "PUT",
            data
        };

        const response = await api(`/products/${data.id}`, config);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export const handleImageDeletion = async (isSaved: boolean, images: (File | string)[], index: number) => {
    // just send the product.images or productImages
    const filtered = images.filter((_, currIndex) => currIndex !== index);

    if (isSaved && images.length) {
        try {
            const imageToDelete = images[index] as string;
            // Delete from Firebase Storage
            if (imageToDelete.startsWith('gs://') || imageToDelete.startsWith('http')) {
                const imageRef = storageRef(storage, imageToDelete);
                await deleteObject(imageRef);
            }

            toast.success('Image deleted successfully!', { autoClose: 1000, theme: 'dark' });
            return filtered as string[]
        } catch (err) {
            console.error('Error deleting image:', err);
        }
    }
    return filtered.length > 0 ? filtered as File[] : null
}


export const uploadFilesAndGetUrl = async (images: File[] | null,): Promise<void | string[]> => {
    if (!images) return;
    const urls: string[] = [];


    await Promise.all(images.map(async (file) => {
        try {
            const imageRef = storageRef(storage, `products/${uuid()}`);
            const snapshot = await uploadBytesResumable(imageRef, file);

            const url = await getDownloadURL(snapshot.ref);
            urls.push(url);
        } catch (error) {
            console.log('Error uploading image:', error);
        }
    }));

    return urls;
};

