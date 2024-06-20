import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Box from '@mui/material/Box';
import { useCartStore } from '../../stores/CartStore';

type Props = {
    toggleCart: (toggle: boolean) => void
}


const Index = ({ toggleCart }: Props) => {

    const { increaseQuantity, decreaseQuantity, removeFromCart, cart } = useCartStore();

  

    return (
        <Box sx={{ width: 400 }} role="presentation" className='bg-[#2e2f3b] h-full flex flex-col justify-between' >
            <div>
                <div className='flex justify-between p-3 border-b-[1px] border-white/20' >
                    <p className='text-white/90 text-xl'  >Твоята количка</p>
                    <p className='close-btn cursor-pointer text-xl text-white pr-2' onClick={() => toggleCart(false)} >X</p>
                </div>

                <div>
                    {cart.length ? cart.map((item) => {
                        return (
                            <div className='p-2 flex gap-x-2 items-center pb-5'>
                                <div className='w-20 max-w-[8rem] border-[1px] border-gray-600 rounded-sm relative' >
                                    <img className='w-full object-cover' src={item.thumbnail} alt="product-image" />
                                    <p onClick={() => removeFromCart(item.id)} className='flex justify-center items-center absolute -top-1 -left-1 text-white/80 bg-gray-600/90 rounded-full h-4 w-4 cursor-pointer' >x</p>
                                </div>

                                <div className='flex flex-col gap-y-2 flex-grow' >
                                    <div className='max-w-sm'>
                                        <p className='text-white/80 text-wrap text-base' >{item.name}</p>
                                    </div>

                                    <form className="max-w-xs">
                                        <div className="relative flex items-center max-w-[8rem]">

                                            <button onClick={() => decreaseQuantity(item.id)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg py-1 px-2 h-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                </svg>
                                            </button>

                                            <p className="bg-gray-50 border-x-0 border-gray-300 h-5 text-center text-gray-900 text-sm px-4 dark:bg-gray-700 dark:border-gray-600 border rounded-sm dark:text-white/90" >{item.quantity}</p>

                                            <button onClick={() => increaseQuantity(item.id)} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-1 px-2 h-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>

                                        </div>
                                    </form>
                                </div>

                                <div className='flex flex-col justify-between'>
                                    <p className='font-semibold  text-sm text-white/90' >{(item.quantity * item.price).toFixed(2)}лв.</p>
                                    <div>&nbsp;</div>
                                    {/* TODO: Discount */}
                                </div>
                            </div>
                        )
                    }) :
                        <p onClick={() => toggleCart(false)} >pazaruvai sega</p>
                    }
                </div>
            </div>
            {/* DISCOUNT */}

            <div className='flex flex-col gap-y-2 px-2' >
                <div className='flex items-center justify-around bg-electricGreen/50 rounded-sm' >
                    <div className='flex gap-x-2 py-2 items-center' >
                        <ShoppingCartCheckoutIcon sx={{ color: "white" }} />
                        <button className='text-white/90 font-semibold text-xl text-center' >Завърши покупката {cart.reduce((acc, item) => acc + (item.quantity * item.price), 0).toFixed(2)}лв.</button>
                    </div>
                </div>
                <button className='text-white/60 text-lg p-2' onClick={() => toggleCart(false)} >Продължи да пазруваш</button>
            </div>

        </Box >
    )
}

export default Index