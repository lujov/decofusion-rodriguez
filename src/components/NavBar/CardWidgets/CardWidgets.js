import React from 'react'; 
import { makeStyles } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {CardWidgetsStyle} from '../CardWidgets/CardWidgetsStyle'

const useStyles = makeStyles((theme) => CardWidgetsStyle(theme));

export const CardWidgets = () => {
    const classes = useStyles();

    return <div className={classes.container}>
       <ShoppingCart className={classes.cartIcon}/>
    </div>;     
    
  }

  