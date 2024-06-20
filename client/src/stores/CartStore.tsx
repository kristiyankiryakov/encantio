import { create } from 'zustand';
import { ProductItem } from '../types/Product';

type CartState = {
    isCartOpen: boolean
    toggleCart: (toggle: boolean) => void

    cart: ProductItem[]
    addToCart: (product: ProductItem) => void
    removeFromCart: (productId: number) => void

    increaseQuantity: (productId: number) => void
    decreaseQuantity: (productId: number) => void
}

const useCartStore = create<CartState>((set) => ({
    isCartOpen: false,
    toggleCart: (toggle: boolean) => set(() => ({
        isCartOpen: toggle
    })),

    cart: JSON.parse(localStorage.getItem('cart') || '[]'),

    addToCart: (product: ProductItem) => set((state) => {
        const isInCart = state.cart.some(item => item.id === product.id);
        let updatedCart;
        
        if (isInCart) {
            updatedCart = state.cart.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 }; // Increase quantity
                }
                return item;
            });
        } else {
            updatedCart = [...state.cart, product];
        }

        saveCartToLocalStorage(updatedCart);

        return { cart: updatedCart };
    }),

    removeFromCart: (productId: number) => set((state) => {
        const updatedCart = state.cart.filter(item => item.id !== productId);
        saveCartToLocalStorage(updatedCart);
        return { cart: updatedCart };
    }),

    increaseQuantity: (productId: number) => set((state) => {
        const updatedCart = state.cart.map(item =>
            item.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        saveCartToLocalStorage(updatedCart);
        return { cart: updatedCart };
    }),

    decreaseQuantity: (productId: number) => set((state) => {
        const updatedCart = state.cart
            .map(item =>
                item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter(item => item.quantity > 0); // Remove items with quantity 0
        saveCartToLocalStorage(updatedCart);
        return { cart: updatedCart };
    }),

    clearCart: () => set(() => {
        const updatedCart: ProductItem[] = [];
        saveCartToLocalStorage(updatedCart);
        return { cart: updatedCart };
    }),
}));

const useCartTotalProductCount = () => {
    const cart = useCartStore(state => state.cart);
    return cart.reduce((total, item) => total + item.quantity, 0);
};

const saveCartToLocalStorage = (cart: ProductItem[]) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

export { useCartStore, useCartTotalProductCount };