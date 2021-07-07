import React from 'react';
import { ItemStyle } from '../Item/ItemStyle';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ItemStyle(theme));

export const Item = ({ item }) => {
    const classes = useStyles();

    return <article className={classes.container}>
        <img src={item.pictureUrl} alt="Producto"></img>
        <h3>{item.title}</h3>
        {/* <p>{item.description}</p> */}
        <span>${item.price}</span>

    </article>;

}