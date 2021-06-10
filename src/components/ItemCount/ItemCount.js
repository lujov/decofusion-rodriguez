import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Remove } from '@material-ui/icons';
import { ItemCountStyle } from './ItemCountStyle';


const useStyles = makeStyles((theme) => ItemCountStyle(theme));


export const ItemCount = ({ stock, initial }) => {
    const classes = useStyles();
    const [count,setcount ] = useState(parseInt(initial));

    const addStock = () => {
       count < 7 ? setcount(count + 1) : setcount(count);
    };

    const removeStock = () => {
      count > 0 ? setcount(count - 1): setcount(count);
   };

    return <div className={classes.container}>
       <div><Add onClick={e => addStock()} className={classes.btnAdd}/></div>
       <p>{count}</p>
       <div><Remove onClick={e => removeStock()} className={classes.btnRemove} /></div>
    </div>;     
    
  }