import { boxItem } from "./cart-items";

 interface cart {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviews: number;
    image: string;
    badge?: string;
    isNew?: boolean;
}


// export interface cartItem {
//     box: boxItem[]
// }

export const userCart: cart[] = [];