import React from 'react';
import { ItemDetailContainerStyle } from './ItemDetailContainerStyle';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ItemDetailContainerStyle(theme));

export const ItemDetailContainer = () => {
    const classes = useStyles();

    return <section className={classes.container}>
        <h1>HOLAAA</h1>

    </section>;

}