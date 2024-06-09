import { Table } from "flowbite-react";

type Review = {
    id?: number;
    name: string;
    email: string;
    productName: string
    body: string;
    approved: boolean;
    rating: number;
}

const reviews: Review[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', productName: 'Logitech 1', body: 'Great product!', approved: false, rating: 1 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', productName: 'Logitech 2', body: 'Not bad', approved: false, rating: 5 },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', productName: 'Logitech 3', body: 'Would not recommend.', approved: false, rating: 3 },
];

// TODO:
// TODO: hook vzimam review i gi listvam v tablicata 
// TODO: butoni - accept reject view - view open v modal

const Index: React.FC = () => {


    return (
        <div className="container mx-auto mt-8 ">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">Manage Reviews</h2>

            {/* table component */}
            <div className="overflow-x-auto">
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
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Delete</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {reviews && reviews.map((r) => {

                            return (
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {r.id}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {r.productName}
                                    </Table.Cell>
                                    <Table.Cell>{r.approved ? 'Yes' : 'No'}</Table.Cell>
                                    <Table.Cell>{r.rating}</Table.Cell>
                                    <Table.Cell>
                                        <a href="#" className="font-medium text-blue-500 hover:underline dark:text-blue-500">
                                            Preview
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                            Edit
                                        </a>
                                    </Table.Cell>
                                    <Table.Cell >
                                        <a onClick={(() => console.log('del rev'))} className="font-medium hover:underline text-danger cursor-pointer">
                                            Delete
                                        </a>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}

                    </Table.Body>
                </Table>
            </div>

        </div>
    );
};

export default Index;
