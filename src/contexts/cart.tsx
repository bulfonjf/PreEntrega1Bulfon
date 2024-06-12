import PropTypes from 'prop-types'
import { createContext, useState, useEffect } from 'react'
import { CartItem } from '../model/cartItem';
import { Item } from '../model/item';

interface CartContextProps {
    cartItems : CartItem[],
    addToCart : (item : Item) => void,
    removeFromCart : (item : Item) => void,
    clearCart : () => void,
    getCartTotal : () => number
  }


export const CartContext = createContext<CartContextProps>({
    cartItems: [],
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    getCartTotal: () => 0,
});

export const CartProvider = ({children} : any) => {
    const localStorageCartItem =  localStorage.getItem('cartItems') || '[]'
    const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorageCartItem) : [])

    const addToCart = (item : Item) => {
        const isItemInCart = cartItems.find((cartItem : CartItem) => cartItem.id === item.id);

        if (isItemInCart) {
        setCartItems(
            cartItems.map((cartItem : CartItem) =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
        );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (item : Item) => {
        const isItemInCart = cartItems.find((cartItem : CartItem) => cartItem.id === item.id);

        if (isItemInCart.quantity === 1) {
        setCartItems(cartItems.filter((cartItem : CartItem) => cartItem.id !== item.id));
        } else {
        setCartItems(
            cartItems.map((cartItem : CartItem) =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            )
        );
        }
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((cartItem : CartItem, total : number) => total + cartItem.totalPrice, 0);
    };

    useEffect(() => {
        const data = localStorage.getItem('cartItems');
        if (data) {
            setCartItems(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider
        value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            getCartTotal,
        } as CartContextProps}
        >
        {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};