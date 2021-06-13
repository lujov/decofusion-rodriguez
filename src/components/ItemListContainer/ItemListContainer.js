import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ItemListContainerStyle } from './ItemListContainerStyle';
// import { ItemCount } from '../ItemCount/ItemCount;'
import { ItemList } from '../ItemList/ItemList'



const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));

export const ItemListContainer = ({ greeting }) => {
    const classes = useStyles();

    return <section className={classes.container}>
        <h2>{ greeting }</h2>
        {/* <ItemCount  stock='4' initial='0'/> */}
        <ItemList />
    </section>;     
    
  }
