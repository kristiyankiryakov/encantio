import cartImage from "../../assets/Cart.png"

type Props = {
    toggleDrawer: (newOpen: boolean) => () => void
}

const CartButton = ({ toggleDrawer }: Props) => {
    return (
        <div onClick={toggleDrawer(true)} className="xs:p-2 md:p-2 lg:p-3 rounded-lg bg-gray-700 cursor-pointer hover:bg-gray-600" >
            <img src={cartImage} alt="cart-image" />
        </div>
    )
}

export default CartButton