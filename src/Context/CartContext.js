import React, {createContext,useState} from "react";

export const CartContext = createContext();

export const CartComponentContext = props => {
    const [cart,setCart] = useState([]);

    const addItem = (item,quantity) => {
        const itemsInCart = cart.filter(producto => producto.item[0].id === item[0].id); 

        if (itemsInCart.length===0 && cart.length===0) {
            setCart([
                {
                item: item,
                quantity: quantity
                }
            ])
        } else if (itemsInCart.length===0 && cart.length>0) {
            setCart([
                ...cart
                ,{
                item: item,
                quantity: quantity
                }
            ])
        } else {
            //se cambia la cantidad de ese producto que ya se encuentra en el carrito
        }

    }

    const removeItem = (itemId) => {
        const itemsNotRemove = cart.filter(producto => producto.item[0].id !== itemId);
        setCart([itemsNotRemove]);
    }

    const clear = () => {
        setCart([]);
    }

  return <CartContext.Provider value={{ addItem,removeItem,clear,cart }}>
    {props.children}
  </CartContext.Provider>

}