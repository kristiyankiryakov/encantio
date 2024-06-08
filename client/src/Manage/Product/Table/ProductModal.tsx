import { AxiosError } from "axios";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import api from "../../../api";
import { Product } from "../ProductType";


type Props = {
    invalidateFetch: () => void

    openModal: {
        show: boolean;
        product: null | Product;
    }

    setOpenModal: React.Dispatch<React.SetStateAction<{
        show: boolean;
        product: null | Product;
    }>>
}

const ProductModal = ({ invalidateFetch, openModal, setOpenModal }: Props) => {

    const deleteProduct = async (id: number): Promise<void> => {
        try {
            const response = await api({ url: `products/${id}`, method: 'DELETE' });
            response.status == 200 && invalidateFetch();
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error?.response?.data || error.message);
            }
        }
    }

    return (
        <>
            <Modal show={openModal.show} size="lg" onClose={() => setOpenModal(() => ({ product: null, show: false }))} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            {`Are you sure you want to delete ${openModal.product && openModal.product.name} with id ${openModal.product?.id} ?`}
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={() => {
                                if (openModal.product) {
                                    deleteProduct(openModal.product.id);
                                }
                                setOpenModal(() => ({ product: null, show: false }))
                            }}>
                                {"Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(() => ({ product: null, show: false }))}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal >
        </>
    )
}

export default ProductModal