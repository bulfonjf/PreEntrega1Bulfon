import { Item } from "./item";

export interface CartItem {
    id: string;
    quantity: number;
    item: Item
}