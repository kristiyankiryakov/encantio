import { Button, Modal } from "flowbite-react";

type Props = {
    openModal: {
        state: boolean;
        text: string
    }
    setOpenModal: React.Dispatch<React.SetStateAction<{
        state: boolean;
        text: string
    }>>

}

const Preview = ({ openModal, setOpenModal }: Props) => {
    return (
        <Modal show={openModal.state} onClose={() => setOpenModal((p) => ({ ...p, state: false }))}>
            <Modal.Header>Review Body</Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {openModal.text}
                    </p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button color="gray" onClick={() => setOpenModal((p) => ({ ...p, state: false }))}>
                    Close Modal
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Preview