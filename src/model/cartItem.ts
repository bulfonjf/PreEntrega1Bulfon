import { Item } from "./item";

export interface CartItem {
    id: string;
    quantity: number;
    totalPrice: number;
    item: Item
}