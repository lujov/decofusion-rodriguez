import { makeStyles } from '@material-ui/core';
import { CartStyle } from './CartStyle';
import React,{useContext} from 'react';
import { CartContext } from '../../../Context/CartContext';
import {Delete} from '@material-ui/icons';

const useStyles = makeStyles((theme) => CartStyle(theme));

export const Cart = ({ item }) => {
    const classes = useStyles();
    const { removeItem } = useContext(CartContext);
 
    return <div className={classes.containerCart}>
        {item!==undefined &&
            <article>
                <div className={classes.infoItemContainer}>
                    <img src={item.item.pictureUrl} alt={item.item.title}/>
                    <p>{item.item.title}</p>
                    <p>{item.quantity}</p>
                    <p>{item.color}</p>
                </div>
                <div className={classes.divisor}></div>
                <div className={classes.precioContainer}>
                    <p>Precio: ${item.item.price}</p>
                    <button onClick={e => removeItem(item.item.id)}><Delete/></button>
                </div>
            </article>
         }
    </div>

}