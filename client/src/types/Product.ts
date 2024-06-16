import { Review } from "./Review"


export type Product = {
    id?: number
    createdAt?: number
    updatedAt?: number
    description: string
    featured: boolean
    thumbnail: string | null
    images: string[] | null
    name: string
    reviews: Review[] | []
    stock: number
    price: number
}
