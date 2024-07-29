import { deleteObject, getDownloadURL, ref as storageRef, uploadBytesResumable } from "firebase/storage";
import { toast } from 'react-toastify';
import { v4 as uuid } from "uuid";
import api from "../../api";
import { storage } from "../../firebase";
import { Product } from "../../types/Product";
import { AxiosError } from "axios";
import { Tag } from "../../types/Tag";


export const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setProduct: (product: Product | ((prev: Product) => Product)) => void) => {

    const { name, value } = e.target;
    setProduct(prevState => ({
        ...prevState,
        [name]: name === 'featured' ? value === 'true' ? true : false : value
    }));
}

export const createProduct = async (product: Product) => {
    try {
        const config = {
            method: "POST",
            data: product
        };

        const response = await api<Product>('/products', config);
        toast.success('Save product successfully!', { autoClose: 1000, theme: "dark" });
        return response;
    } catch (err: unknown) {
        if (err instanceof AxiosError && err.response) {
            toast.error(err.response.data.message, { autoClose: 1000, theme: "dark" })
        }
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
        if (err instanceof AxiosError && err.response) {
            toast.error(err.response.data.message, { autoClose: 1000, theme: "dark" })
        }
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


export const handleTagToProduct = async (productId: number, tagId: number) => {
    try {
        const response = await api(`/products/${productId}/${tagId}`, { method: "POST" })
        toast.success('Updated tag successfully!', { autoClose: 1000, theme: "dark" });
        return response.data;
    } catch (err) {
        if (err instanceof AxiosError && err.response) {
            toast.error(err.response.data.message, { autoClose: 1000, theme: "dark" })
        }
        return null;
    }
}

export const filterAddedTags = (allTags: Tag[], addedTags: Tag[]) => {
    if (!allTags || !addedTags) return;

    return allTags.filter((tag) =>
        !addedTags.some(addedTag => addedTag.id === tag.id)
    );
}

export const handleCreateTag = async (name: string) => {
    try {

        await api(`/tags?name=${name}`, { method: "POST" });
        toast.success('Created tag successfully!', { autoClose: 1000, theme: "dark" });

    } catch (err) {
        console.log(err);
        if (err instanceof AxiosError && err.response) {
            toast.error(err.response.data.message, { autoClose: 1000, theme: "dark" })
        }
        return null;
    }
}