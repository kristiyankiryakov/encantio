import { FloatingLabel } from "flowbite-react";
import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import ProductModal from './ProductModal';
import ProductTable from './ProductTable';
import { Product } from '../ProductType';

const Index = () => {

    const [productPerPage] = useState(13);
    const [currentPage, setCurrentPage] = useState(1);

    const { data: products, errorMsg, invalidateFetch } = useFetch<Product[]>(`/products?pageNumber=${currentPage - 1}&pageSize=${productPerPage}`, 'GET');
    0
    const [filter, setFilter] = useState("");
    const [openModal, setOpenModal] = useState<{ show: boolean, product: null | Product }>({ show: false, product: null });

    return (
        <div className="w-full">
            <div className='flex pl-36 pt-6 pb-2' >
                <FloatingLabel variant="standard" label="Filter by product name" sizing="md" value={filter} onChange={((e) => setFilter(e.target.value))} />
            </div>

            <ProductTable products={products} filter={filter} productPerPage={productPerPage} setOpenModal={setOpenModal} currentPage={currentPage} setCurrentPage={setCurrentPage} errorMsg={errorMsg} />

            <ProductModal invalidateFetch={invalidateFetch} openModal={openModal} setOpenModal={setOpenModal} />

        </div>
    )
}

export default Index