import React from 'react';
import { makeStyles } from '@material-ui/core';
import { PromosListStyle } from '../Components/PromosListStyle';
import { Promos } from './Promos';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => PromosListStyle(theme));

export const PromosList = ({ promos }) => {
    const classes = useStyles();

    return <div className={classes.container}>
        <div className={classes.itemTitle}><h1>PROMOCIONES</h1></div>
        <div>
            {promos.map((promo,i) =>
                <Link to={`/combo/${i+1}`} key={i}>
                    <Promos
                        key={i}
                        promo={promo}
                    />
                </Link>
            )}
        </div>

    </div>
}   