export type Review = {
    id?: number;
    name: string;
    email: string;
    product: {
        name: string
        id: number
    }
    body: string;
    approved: boolean;
    rating: number;
}