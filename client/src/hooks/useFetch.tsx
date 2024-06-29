import { AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import api from '../api';


const useFetch = <T,>(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE') => {
    const [data, setData] = useState<T | null>(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [invalidate, setInvalidate] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const invalidateFetch = useCallback(() => {
        setInvalidate(prev => !prev);
    }, []);


    useEffect(() => {
        (async () => {
            try {
                const config = {
                    url,
                    method,

                };
        
                const response = await api(config);
                setData(response.data);
            } catch (error) {
                if (error instanceof AxiosError) {
                    setErrorMsg(error?.response?.data || error.message);
                }
            } finally {
                setLoading(false);
            }
        })();
    }, [url, method, invalidate]);

    return { data, errorMsg, invalidateFetch, loading };

}

export default useFetch