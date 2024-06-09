import { Table } from "flowbite-react";
import useFetch from "../../hooks/useFetch";
import { Review } from "../../types/Review";
import { approveReview, deleteReview } from "../services/ReviewHelper";


type Props = {
    setOpenModal: React.Dispatch<React.SetStateAction<{
        state: boolean;
        text: string;
    }>>
}

const TableReview = ({ setOpenModal }: Props) => {

    const { data: reviews, invalidateFetch } = useFetch<Review[]>(`/reviews`, 'GET');

    const handleDelete = async (id: number) => {
        await deleteReview(id);
        invalidateFetch();
    }

    const handleApproveState = async (id: number, state: boolean) => {
        await approveReview(id, state);
        invalidateFetch();
    }

    return (
        <>
            <Table striped>
                <Table.Head>
                    <Table.HeadCell>ID</Table.HeadCell>
                    <Table.HeadCell>Product name</Table.HeadCell>
                    <Table.HeadCell>Approved</Table.HeadCell>
                    <Table.HeadCell>Rating</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Preview</span>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Approve</span>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Hide</span>
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Delete</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {reviews && reviews.map((r) => {

                        return (
                            <Table.Row key={`review-${r.id}`} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {r.id}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {r.product.name} | {r.product.id}
                                </Table.Cell>
                                <Table.Cell>{r.approved ? 'Yes' : 'No'}</Table.Cell>
                                <Table.Cell>{r.rating}</Table.Cell>
                                <Table.Cell>
                                    <a onClick={() => setOpenModal(({ state: true, text: r.body }))} className="font-medium text-blue-500 hover:underline dark:text-blue-500 cursor-pointer">
                                        Preview
                                    </a>
                                </Table.Cell>
                                <Table.Cell>
                                    <a onClick={() => handleApproveState(r.id as number, true)} className="font-medium text-green-600 hover:underline dark:text-green-500 cursor-pointer">
                                        Approve
                                    </a>
                                </Table.Cell>
                                <Table.Cell>
                                    <a onClick={() => handleApproveState(r.id as number, false)} className="font-medium text-warning hover:underline dark:text-warning cursor-pointer">
                                        Hide
                                    </a>
                                </Table.Cell>
                                <Table.Cell >
                                    <a onClick={(() => handleDelete(r.id as number))} className="font-medium hover:underline text-danger cursor-pointer">
                                        Delete
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
        </>
    )

}

export default TableReview;