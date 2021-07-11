import React, {createContext,useState} from "react";

export const CartContext = createContext();

export const CartComponentContext = props => {
    const [cart,setCart] = useState([]);

    const addItem = (item,color,quantity) => {
        const itemsInCart = cart.filter(producto => producto.item.id === item.id); 

        if (itemsInCart.length===0 && cart.length===0) {
            setCart([
                {
                item: item,
                color: color,
                quantity: quantity
                }
            ])
        } else if (itemsInCart.length===0 && cart.length>0) {
            setCart([
                ...cart
                ,{
                item: item,
                color: color,
                quantity: quantity
                }
            ])
        } else {
            
            const notInCart = cart.filter(producto => producto.item.id !== item.id);
            const alreadyInCart = cart.filter(producto => producto.item.id === item.id);

            alreadyInCart[0].quantity = alreadyInCart[0].quantity + quantity;

            setCart([
                ...notInCart,
                alreadyInCart[0]
            ])

        }

    }

    const removeItem = (itemId) => {
        const itemsNotRemove = cart.filter(producto => producto.item.id !== itemId);
        setCart(itemsNotRemove);
    }

    const clear = () => {
        setCart([]);
    }

  return <CartContext.Provider value={{ addItem,removeItem,clear,cart }}>
    {props.children}
  </CartContext.Provider>

}