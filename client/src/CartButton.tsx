import cartImage from "./assets/Cart.png";

const CartButton = () => {
    return (
        <div className="xs:p-2 md:p-2 lg:p-3 rounded-lg bg-gray-700 cursor-pointer hover:bg-gray-600" >
            <img src={cartImage} alt="cart-image" />
        </div>
    )
}

export default CartButton