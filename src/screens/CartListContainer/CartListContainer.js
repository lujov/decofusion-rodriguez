import React from 'react';
import { makeStyles } from '@material-ui/core';
import { CartListContainerStyle } from './CartListContainerStyle';
import { CartList } from './CartList/CartList'

const useStyles = makeStyles((theme) => CartListContainerStyle(theme));

export const CartListContainer = () => {
    const classes = useStyles();

    return <section className={classes.container}>
        <CartList/>
    </section>
}
