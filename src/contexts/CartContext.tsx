import { createContext } from 'react';
import { CartItem } from '../model/cartItem';


export const CartContext = createContext([] as CartItem[]);