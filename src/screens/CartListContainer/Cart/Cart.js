import { makeStyles } from '@material-ui/core';
import { CartStyle } from './CartStyle';
import React,{useContext} from 'react';
import { CartContext } from '../../../Context/CartContext';

const useStyles = makeStyles((theme) => CartStyle(theme));

export const Cart = ({ item }) => {
    const classes = useStyles();
    const { removeItem } = useContext(CartContext);
 
    return <div className={classes.containerCart}>
        {item!==undefined &&
            <tr>
                <div className={classes.infoItemContainer}>
                    <td><img src={item.item[0].pictureUrl} alt={item.item[0].title}/></td>
                    <td><p>{item.item[0].title}</p></td>
                    <td><p>{item.quantity}</p></td>
                </div>
                <div className={classes.divisor}></div>
                <td className={classes.precioContainer}>
                    <span>Precio</span>
                    <p>${item.item[0].price}</p>
                    <button onClick={e => removeItem(item.item[0].id)}>Eliminar producto</button>
                </td>
            </tr>
         }
    </div>

}