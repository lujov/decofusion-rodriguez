import React, {createContext,useState} from "react";
import { dataBase } from '../firebase/fireBase';

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
                quantity: quantity,
                combo: false
                }
            ])
        } else if (itemsInCart.length===0 && cart.length>0) {
            setCart([
                ...cart
                ,{
                item: item,
                color: color,
                quantity: quantity,
                combo: false
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

    const addItemCombo = (comboId) => {
        const itemCollection = dataBase.collection("productos");
        const itemsCombo = itemCollection.where('comboId','==',comboId);

        itemsCombo.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No results!')
            }
            let newCombo = querySnapshot.docs.map(doc=> ({id: doc.id, item: doc.data(),quantity: 1,combo: true}))
            setCart([...cart,...newCombo])
        })
        
    }

    const removeItem = (itemId) => {
        const itemsNotRemove = cart.filter(producto => producto.item.id !== itemId);
        setCart(itemsNotRemove);
    }

    const clear = () => {
        setCart([]);
    }

  return <CartContext.Provider value={{ addItem,removeItem,clear,cart,addItemCombo }}>
    {props.children}
  </CartContext.Provider>

}