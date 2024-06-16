import { Label, Table, Textarea } from "flowbite-react";
import { useParams } from "react-router-dom";
import FeetImage from "../../../assets/feet-image.png";
import { HiOutlinePencil } from "react-icons/hi";

type Props = {}

const Index = (props: Props) => {

    const { id } = useParams();

    return (
        <div className='w-full' >

            <h1 className="text-2xl text-white text-medium p-5" >{`Order #${id}`}</h1>

            <div className="grid grid-cols-6 gap-5 mt-5 p-4" >
                <div className="col-span-4 dark:bg-[#292929] rounded-lg" >
                    <h2 className="text-2xl font-medium p-3 text-white" >Products</h2>

                    <Table hoverable >
                        <Table.Head  >
                            <Table.HeadCell className="dark:bg-[#292929] dark:text-white/70">Item name</Table.HeadCell>
                            <Table.HeadCell className="dark:bg-[#292929] dark:text-white/70" >Quantity</Table.HeadCell>
                            <Table.HeadCell className="dark:bg-[#292929] dark:text-white/70" >Price</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">

                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-[#292929] dark:text-white border-b-[1px] ">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white flex items-center gap-5">
                                    <div className="w-24" >
                                        <img className="w-full" src={FeetImage} alt="product_image" />
                                    </div>
                                    <p> {'Logitech 20"'}</p>
                                </Table.Cell>
                                <Table.Cell>3</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    </Table>


                </div>

                <div className="col-span-2" >
                    <div className="flex flex-col gap-6" >

                        <div className="payment-window flex flex-col gap-2" >
                            <div className="dark:bg-[#292929] rounded-lg " >
                                <h1 className="text-white p-3 text-lg" >Payment</h1>

                                <div className="flex flex-col p-4" >
                                    <div className="flex justify-between" >
                                        <p className="text-gray-500" >Product Total</p>
                                        <p className="text-white/80" >$120</p>
                                    </div>
                                    <div className="flex justify-between" >
                                        <p className="text-gray-500"  >Discount</p>
                                        <p className="text-white/80" >$0</p>
                                    </div>
                                    <div className="flex justify-between" >
                                        <p className="text-gray-500"  >Shipping cost</p>
                                        <p className="text-white/80" >$6.70</p>
                                    </div>
                                    <div className="flex justify-between" >
                                        <p className="text-gray-500"  >Total</p>
                                        <p className="font-semibold" >$126.70</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 dark:bg-[#292929] p-3 rounded-lg" >
                                <button className="border border-1 border-white/30 text-white px-4 py-2 rounded-md dark:bg-[#292929]" >Download Invoice</button>
                                <button className="border border-1 border-white/30 text-white px-4 py-2 rounded-md dark:bg-[#292929]" >Resend Invoice</button>
                            </div>
                        </div>

                        <div className="customer-window dark:bg-[#292929] rounded-lg p-4" >
                            <h2 className="text-lg text-white" >Customer</h2>

                            <div className="flex flex-col gap-1 mt-4" >
                                <p className="text-white/60 " >Stoyan Kaninov</p>
                                <p className="text-primary" >stoyan@kaninov.com</p>
                                <p className="text-white/60" >+359 1232 1864 23</p>
                            </div>

                            <div className="flex items-center justify-between mt-4" >
                                <h2 className="text-white/40 font-medium " >Shipping Address</h2>
                                <HiOutlinePencil className="cursor-pointer text-gray-400" size={16} />
                            </div>

                            <div className="mt-4 flex flex-col gap-1 text-white/60" >
                                <p>Stoyan Kaninov</p>
                                <p>1000 Sofia</p>
                                <p>Hotel Hilton 32</p>
                            </div>
                        </div>

                        <div className="note-windows dark:bg-[#292929] rounded-lg p-4" >
                            <div className="max-w-md">
                                <div className="mb-2 block">
                                    <Label className="text-lg" htmlFor="comment" value="Note" />
                                </div>
                                {/* Add value */}
                                <Textarea className="p-3" id="comment" placeholder="A note left from the customer..." disabled rows={4} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index