import { Review } from "./Review"
import { Tag } from "./Tag"


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
    tags: Tag[]
}

export type ProductItem = {
    id: number
    thumbnail: string
    quantity: number
    price: number
    name: string
}