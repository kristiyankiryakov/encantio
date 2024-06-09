// HelperService.ts
import { toast } from 'react-toastify';
import api from "../../../api";
import { DefaultProduct, Product } from "../ProductType";


export const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setProduct: React.Dispatch<React.SetStateAction<Product | DefaultProduct>>) => {

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


// export const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, isThumbnail: boolean) => {
//     const files = e.target.files;
//     if (files) {
//         isThumbnail ? this.setThumbnail(files[0]) : this.setProductImages(Array.from(files));
//     }
// }
