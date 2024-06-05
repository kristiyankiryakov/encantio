import { useCallback, useEffect, useState } from 'react'
import api from '../api';
import { AxiosError } from 'axios';


const useFetch = <T,>(url: string, method: string) => {
    const [data, setData] = useState<T | null>(null);
    const [errorMsg, setErrorMsg] = useState('');
    const [invalidate, setInvalidate] = useState(false);

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
            }
        })();
    }, [url, method, invalidate]);

    return { data, errorMsg, invalidateFetch };

}

export default useFetch