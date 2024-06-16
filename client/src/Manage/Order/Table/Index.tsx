import { Pagination, Table } from "flowbite-react"
import { useState } from "react";
import { orderProductTableColumns } from "../../Constants/ProductTableColumns";

type Props = {}

const Index = (props: Props) => {

    const [pagination, setPagination] = useState({
        currentPage: 1,
        ordersPerPage: 13,
        totalPages: 100
    });

    return (
        <div className="w-full" >
            <h1 className="text-2xl text-white font-semibold" >Orders</h1>

            <div className="Table-component flex h-3/4 flex-col justify-between" >
                <div className="w-10/12 mx-auto" >
                    <Table hoverable>
                        <Table.Head>
                            {orderProductTableColumns.map((name) => {
                                return (
                                    <Table.HeadCell>{name}</Table.HeadCell>
                                )
                            })}
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">

                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    #123123213
                                </Table.Cell>
                                <Table.Cell>12 Apr 2024</Table.Cell>
                                <Table.Cell>john@test.com</Table.Cell>
                                <Table.Cell>3</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                                <Table.Cell>Fulfilled / Unfulfilled</Table.Cell>
                                <Table.Cell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Open
                                    </a>
                                </Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    </Table>
                </div>

                <div className="flex sm:justify-center">
                    <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} onPageChange={(page: number) => setPagination((p) => ({ ...p, currentPage: page }))} />
                </div>


            </div>

        </div>
    )
}

export default Index