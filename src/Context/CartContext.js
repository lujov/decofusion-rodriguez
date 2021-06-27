import React, { useState ,createContext } from 'react';

export const CartContext = createContext();

export const CartComponentContext = props => {
    const [cart,setCart] = useState([]);
    const [ isInCart, setIsInCart] = useState()

    const addItem = (item,quantity) => {
        const itemsInCart = cart.filter(producto => producto.item.id === item.id);
        itemsInCart === undefined ? setIsInCart(false) : setIsInCart (true);

        if (isInCart) {
            cart.filter(producto => producto.item.id === item.id).quantity = cart.filter(producto => producto.item.id === item.id).quantity + quantity
            setCart([cart]);
        } else {
            setCart([
                {...cart},
                {
                    item:item,
                    quantity: quantity
                }
            ])       
        }
        

    }

    const removeItem = (itemId) =>{
        const pickedItems = cart.filter(producto => producto.item.id === !itemId);
        setCart({pickedItems});
    }

    const clear = () => {
        setCart([]);
    }



    return <CartContext.Provider value={{ addItem, removeItem, clear }}>
        {props.children}
    </CartContext.Provider>
}