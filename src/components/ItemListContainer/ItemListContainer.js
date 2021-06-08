import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ItemListContainerStyle } from './ItemListContainerStyle'

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));

export const ItemListContainer = () => {
    const classes = useStyles();

    return <section className={classes.container}>
        <h2>ACA VA A ESTAR MI TIENDA</h2>
    </section>;     
    
  }
