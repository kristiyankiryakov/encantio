import { Review } from "../Review/ReviewType"

export type Product = {
    createdAt: number
    description: string
    featured: boolean
    id: number
    images: string[]
    name: string
    reviews: number[]
    stock: number
    updatedAt: number
    price: number
}

export type DefaultProduct = {
    description: string
    featured: boolean
    images: string[]
    name: string
    stock: number
    reviews: Review[] | []
    price: number
}