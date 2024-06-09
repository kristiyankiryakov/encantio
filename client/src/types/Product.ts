import { Review } from "./Review"


export type Product = {
    createdAt: number
    description: string
    featured: boolean
    id: number
    thumbnail: string | null
    images: string[] | null
    name: string
    reviews: number[]
    stock: number
    updatedAt: number
    price: number
}

export type DefaultProduct = {
    thumbnail: string | null
    description: string
    featured: boolean
    images: string[] | null
    name: string
    stock: number
    reviews: Review[] | []
    price: number
}