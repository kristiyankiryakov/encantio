import { create } from 'zustand';
import { Product } from '../types/Product';


interface ProductState {
  product: Product
  setProduct: (product: Product | ((prev: Product) => Product)) => void
}

const defaultProduct: Product = {
  description: '',
  featured: false,
  images: null,
  name: '',
  stock: 0,
  reviews: [],
  price: 0,
  tags: [],
  thumbnail: null,
};

const useProductStore = create<ProductState>((set) => ({
  product: defaultProduct,
  setProduct: (product) => set((state) => ({
    product: typeof product === 'function' ? product(state.product) : product,
  })),
}));

export default useProductStore;