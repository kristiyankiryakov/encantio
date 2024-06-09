import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DefaultProduct, Product } from '../Manage/Product/ProductType';
import api from '../api';
import useProductStore from '../stores/ProductStore';

const defaultProduct: DefaultProduct = {
    description: '',
    featured: false,
    images: null,
    name: '',
    stock: 0,
    reviews: [],
    price: 0,
    thumbnail: null
};

function isProduct(product: Product | DefaultProduct): product is Product {
    return (product as Product).id !== undefined;
}


const useProduct = () => {
    const { id } = useParams<{ id: string }>();
    const { product, setProduct } = useProductStore();
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        if (id) {
            (async () => {
                try {
                    const response = await api.get<Product>(`/products/${id}`);
                    setProduct(response.data as Product);
                } catch (error) {
                    if (error instanceof AxiosError) {
                        setErrorMsg(error.response?.data || error.message);
                    }
                } finally {
                    setLoading(false);
                }
            })();
        } else {
            setProduct(defaultProduct);
            setLoading(false);
        }
    }, [id]);

    return { product, loading, errorMsg, setProduct, isProduct };
};

export default useProduct;
