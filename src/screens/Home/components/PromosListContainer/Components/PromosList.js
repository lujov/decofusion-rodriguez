import React from 'react';
import { makeStyles } from '@material-ui/core';
import { PromosListStyle } from '../Components/PromosListStyle';
import { Promos } from './Promos';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => PromosListStyle(theme));

export const PromosList = ({ promos }) => {
    const classes = useStyles();

    return <div className={classes.container}>
        <h1>PROMOCIONES</h1>
        <div>
            {promos.map((promo,i) =>
                <Link to={`/Promos/${promo.id}`} key={i}>
                    <Promos
                        key={i}
                        promo={promo}
                    />
                </Link>
            )}
        </div>

    </div>
}   