import { Pagination, Table } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../types/Product";
import { productTableColumns } from "../../Constants/ProductTableColumns";


type Props = {
    products: Product[] | null,
    setOpenModal: React.Dispatch<React.SetStateAction<{
        show: boolean;
        product: null | Product;
    }>>
    errorMsg: string

    productPerPage: number
    currentPage: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

const ProductTable = ({ products, currentPage, setOpenModal, errorMsg, setCurrentPage }: Props) => {

    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-3/4 justify-between gap-y-3" >
            {errorMsg && <p className="text-center text-2xl text-danger" >{errorMsg}</p>}

            <div className=" w-10/12 mx-auto">
                <Table striped>
                    <Table.Head>
                        {productTableColumns.map((name) => {
                            return (
                                <Table.HeadCell>{name}</Table.HeadCell>
                            )
                        })}
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {products && products.map((product) => {
                            return (
                                <Table.Row key={product.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="p-4">
                                        {product.id}
                                    </Table.Cell>
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
                                    <Table.Cell >
                                        <a onClick={(() => setOpenModal(() => ({ product: product, show: true })))} className="font-medium hover:underline text-danger cursor-pointer">
                                            Delete
                                        </a>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}

                    </Table.Body>
                </Table>
            </div>

            <div className="flex sm:justify-center">
                <Pagination currentPage={currentPage} totalPages={100} onPageChange={(page: number) => setCurrentPage(page)} />
            </div>
        </div>
    )
}

export default ProductTable