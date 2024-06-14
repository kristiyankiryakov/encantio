import { useState } from "react";
import TableReview from "./ReviewTable";
import ReviewModal from "./ReviewModal";


const Index: React.FC = () => {


    const [openModal, setOpenModal] = useState<{ state: boolean, text: string }>({ state: false, text: '' });

    return (
        <div className="container mx-auto mt-8 ">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">Manage Reviews</h2>


            <div className="overflow-x-auto">
                <TableReview setOpenModal={setOpenModal} />
            </div>

            <ReviewModal openModal={openModal} setOpenModal={setOpenModal} />


        </div>
    );
};

export default Index;
