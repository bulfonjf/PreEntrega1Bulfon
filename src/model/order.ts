import { CartItem } from "./cartItem";

export interface Order {
    name : string;
    surname : string;
    phone : string;
    email : string;
    cartItems : CartItem[];
    total: number;
    date: Date;
    status: string;
}