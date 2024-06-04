import { Product } from './ProductType';
import useFetch from '../../hooks/useFetch';
import { FloatingLabel, Table, Pagination } from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';

const List = () => {

    const { data: products, errorMsg } = useFetch<Product[]>('/products', 'GET');

    const navigate = useNavigate();
    const [filter, setFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => setCurrentPage(page);
    const [productPerPage] = useState(13);

    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;

    const currentProducts = useMemo(() => {
        return products && products.slice(indexOfFirstProduct, indexOfLastProduct).filter((product) => product.name.includes(filter));
    }, [products, filter, currentPage]);


    return (
        <>
            <div className='flex pl-36 pt-6 pb-2' >
                <FloatingLabel variant="standard" label="Filter by product name" sizing="md" value={filter} onChange={((e) => setFilter(e.target.value))} />
            </div>

            <div className="flex flex-col h-3/4 justify-between gap-y-3" >
                {errorMsg && <p className="text-center text-2xl text-danger" >{errorMsg}</p>}


                <div className=" w-10/12 mx-auto">
                    <Table striped>
                        <Table.Head>
                            <Table.HeadCell>Product name</Table.HeadCell>
                            <Table.HeadCell>Stock</Table.HeadCell>
                            <Table.HeadCell>Featured</Table.HeadCell>
                            <Table.HeadCell>Price</Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {currentProducts && currentProducts.map((product) => {
                                return (
                                    <Table.Row key={product.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {product.name}
                                        </Table.Cell>
                                        <Table.Cell>{product.stock}</Table.Cell>
                                        <Table.Cell >{product.featured ? "Yes" : "No"}</Table.Cell>
                                        <Table.Cell>$2999</Table.Cell>
                                        <Table.Cell >
                                            <a onClick={(() => navigate(`/manage/products/${product.id}`))} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer">
                                                Edit
                                            </a>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                            })}

                        </Table.Body>
                    </Table>
                </div >


                <div className="flex sm:justify-center">
                    <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
                </div>
            </div>
        </>
    )
}

export default List