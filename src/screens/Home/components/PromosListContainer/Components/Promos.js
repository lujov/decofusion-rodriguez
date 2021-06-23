import React from 'react';
import { makeStyles } from '@material-ui/core';
import { PromosStyle } from './PromosStyle';

const useStyles = makeStyles((theme) => PromosStyle(theme));

export const Promos = ({ promo }) => {
    const classes = useStyles();

    return <div className={classes.container}>
            <img src={promo.pictureUrl} alt='Combo'></img>
            <h2>{promo.title}</h2>
    </div>
}