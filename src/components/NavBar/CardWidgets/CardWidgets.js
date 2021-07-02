import { makeStyles } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {CardWidgetsStyle} from '../CardWidgets/CardWidgetsStyle'
import React,{ useContext }from 'react';
import { CartContext } from '../../../Context/CartContext';

const useStyles = makeStyles((theme) => CardWidgetsStyle(theme));

export const CardWidgets = () => {
    const classes = useStyles();
    const { cart } = useContext(CartContext);

    let totalItems = 0;
    cart.map ((item) => 
      totalItems = totalItems + item.quantity
    )

    return <div className={classes.container}>
       {cart.length>0 && 
       <>
          <ShoppingCart className={classes.cartIcon}/>
          <div className={classes.totalItem}>{totalItems}</div>
       </>
       }
      
    </div>;     
    
  }

  