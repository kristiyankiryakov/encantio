import { useEffect, useState } from 'react'
import api from '../api';
import { AxiosError } from 'axios';



const useFetch = <T,>(url: string, method: string) => {
    const [data, setData] = useState<T | null>(null);
    const [errorMsg, setErrorMsg] = useState('');


    useEffect(() => {
        (async () => {
            try {
                const response = await api({ url, method });
                setData(response.data);
            } catch (error) {
                error instanceof AxiosError && setErrorMsg(error?.response?.data);
            }
        })();
    }, [url, method]);

    return { data, errorMsg };

}

export default useFetch