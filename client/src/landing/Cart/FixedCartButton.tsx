import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useCartStore, useCartTotalProductCount } from '../../stores/CartStore';



const FixedCartButton = () => {
    const totalProductCount = useCartTotalProductCount();
    const { toggleCart, } = useCartStore();

    return (
        <div className="fixed bottom-10 xs:right-2 xl:right-5 z-20">
            <button
                onClick={() => toggleCart(true)}
                className="bg-white text-xl xs:p-3 xl:p-5 rounded-full shadow-black shadow-xl relative"
            >
                <ShoppingCartCheckoutIcon sx={{ color: "black", fontSize: 32 }} />
                {totalProductCount > 0 && (
                    <span className="absolute top-0 left-0 bg-red-500 text-white text-xs rounded-full xs:w-4 xs:h-4 xl:w-5 xl:h-5 flex items-center justify-center">
                        {totalProductCount}
                    </span>
                )}
            </button>
        </div>
    );
};

export default FixedCartButton;
