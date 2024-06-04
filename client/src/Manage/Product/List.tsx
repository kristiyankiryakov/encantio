import { Product } from './ProductType';
import useFetch from '../../hooks/useFetch';
import { Table } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

const List = () => {

    const { data: products, errorMsg } = useFetch<Product[]>('/products', 'GET');
    const navigate = useNavigate();

    return (<>

        {errorMsg && <p className="text-center text-2xl text-danger" >{errorMsg}</p>}

        <div className="overflow-x-auto w-10/12 mx-auto">
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
                    {products && products.map((product) => {
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
    </>
    )
}

export default List