import React from 'react';
import { ItemListStyle } from '../ItemList/ItemListStyle';
import { makeStyles } from '@material-ui/core';
import { Item } from '../Item/Item';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ItemListStyle(theme));


export const ItemList = ({ items }) => {
    const classes = useStyles();

    return <section className={classes.container}>
        {items.map((producto,i) =>
            <Link to={`/item/${producto.id}`}>
                <Item
                    key={i}
                    item={producto}
                />
            </Link>
        )}
        
    </section>;

}















































































































