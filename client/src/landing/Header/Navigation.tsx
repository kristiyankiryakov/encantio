
import Drawer from '@mui/material/Drawer';
import {
    TEDropdown,
    TEDropdownItem,
    TEDropdownMenu,
    TEDropdownToggle,
} from "tw-elements-react";
import { useCartStore } from "../../stores/CartStore";
import CartContainer from "../Cart/Index";
import OrderNowNavBtn from "./OrderNowNavBtn";
import { useNavigate } from 'react-router-dom';

function Navigation() {

    const pageButtons = [
        { page: "products", text: "Продукти" }, { page: "perks", text: "Предимства" }, { page: "contact-us", text: "За нас" }, { page: "contact", text: "Контакти" }
    ]

    const { isCartOpen, toggleCart } = useCartStore();
    const navigate = useNavigate();

    return (
        <div className='p-4 bg-[#090A18] xs:text-xs sm:text-sm md:text-lg'>
            <nav className='p-3 NAVIGATION  bg-[#090A18] rounded-md flex items-center justify-between xs:w-12/12 md:w-11/12 lg:w-10/12 xl:w-7/12 2xl:w-7/12 mx-auto relative z-10'>

                <div className='LOGO xs:text-2xl'>ENACNTIO</div>

                <div className='group-buttons md:flex 2xl:gap-10 xs:hidden gap-3'>
                    {pageButtons.map((element) => <button onClick={() => navigate(`/${element.page}`)} key={element.text} className="" >{element.text}</button>)}
                </div>

                <OrderNowNavBtn />

                <div className="xs:flex xs:items-center xs:gap-10" >

                    <div className="md:hidden xs:block" >
                        <TEDropdown className="flex justify-center">
                            <TEDropdownToggle className="">
                                <div className="flex flex-col justify-between w-6 h-4 cursor-pointer">
                                    <div className="w-full h-0.5 rounded-xl bg-electricGreen"></div>
                                    <div className="w-full h-0.5 rounded-xl bg-electricGreen"></div>
                                    <div className="w-full h-0.5 rounded-xl bg-electricGreen"></div>
                                </div>

                            </TEDropdownToggle>

                            <TEDropdownMenu className="rounded-sm bg-gray-700" >

                                {pageButtons.map((element, index) => {
                                    return <TEDropdownItem key={element.text + index} className="bg-gray-700 pointer-events-auto" >
                                        <a onClick={() => navigate(`/${element.page}`)} className="block rounded-sm w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal active:bg-gray-500">
                                            {element.text}
                                        </a>
                                    </TEDropdownItem>
                                })}
                            </TEDropdownMenu>
                        </TEDropdown>
                    </div>


                    <Drawer anchor={`right`} open={isCartOpen} onClose={() => toggleCart(false)}>
                        <CartContainer toggleCart={toggleCart} />
                    </Drawer>
                </div>

            </nav >
        </div >
    )
}

export default Navigation