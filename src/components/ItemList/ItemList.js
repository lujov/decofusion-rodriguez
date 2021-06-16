import React from 'react';
import { ItemListStyle } from './ItemListStyle';
import { makeStyles } from '@material-ui/core';
import { Item } from '../Item/Item';

const useStyles = makeStyles((theme) => ItemListStyle(theme));


export const ItemList = ({ items }) => {
    const classes = useStyles();

    return <section className={classes.container}>
        {items.map((producto,i) =>
            <Item
                key={i}
                item={producto}
            />
        
        )}
        
    </section>;

}















































































































