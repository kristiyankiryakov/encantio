import { create } from 'zustand';
import { DefaultProduct, Product } from '../Manage/Product/ProductType';

interface ProductState {
  product: Product | DefaultProduct;
  setProduct: (product: Product | DefaultProduct | ((prev: Product | DefaultProduct) => Product | DefaultProduct)) => void
}

const defaultProduct: DefaultProduct = {
  description: '',
  featured: false,
  images: null,
  name: '',
  stock: 0,
  reviews: [],
  price: 0,
  thumbnail: null,
};

const useProductStore = create<ProductState>((set) => ({
  product: defaultProduct,
  setProduct: (product) => set((state) => ({
    product: typeof product === 'function' ? product(state.product) : product,
  })),
}));

export default useProductStore;