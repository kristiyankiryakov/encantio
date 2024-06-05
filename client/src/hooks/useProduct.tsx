import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { DefaultProduct, Product } from '../Manage/Product/ProductType';
import api from '../api';
import { useParams } from 'react-router-dom';

const defaultProduct = {
    description: '',
    featured: false,
    images: [],
    name: '',
    stock: 0,
    reviews: [],
    price: 0
}


const useProduct = () => {
    const { id } = useParams();
    const [data, setData] = useState<Product | DefaultProduct>(defaultProduct);
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                const config = {
                    url: `/products/${id}`,
                    method: "GET"
                };
                if (id) {
                    const response = await api(config);
                    setData(response.data);
                }

            } catch (error) {
                if (error instanceof AxiosError) {
                    setErrorMsg(error?.response?.data || error.message);
                }
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    return { data, loading, errorMsg, setData };
};

export default useProduct;
