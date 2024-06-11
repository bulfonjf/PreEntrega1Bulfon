import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { CartItem } from '../model/cartItem';
import { useEffect } from 'react';
import CartCard from './CartCard';
import Alert from './Alert';

export default function CartView() {
    const cartContext = useContext<CartItem[]>(CartContext);
    
    useEffect(() => {
        console.log('cartItems: ', cartContext);
    }, [cartContext]);

    const [_, setCartItems] = useState(cartContext)
    
    function clearCart() {
        setCartItems([]);
    }

    return (
        <div>
            <h2>Cart View</h2>
            {
                cartContext.length === 0 ? (
                    <Alert message='Your cart is empty' />
                 ) : (
                    <>
                        <ul>
                            {cartContext.map((cartItem) => (
                                <li key={cartItem.id}>
                                    <CartCard key={cartItem.id} cartItem={cartItem} />
                                </li>
                            ))}
                        </ul>
                        <div>
                        <button
                            className="btn btn-ghost btn-xl text-xl"
                            onClick={() => clearCart()}
                        >
                            Clear cart
                        </button>
                        </div>
                    </>
                )
            }          
        </div>
    );
};