import React from 'react';
import { makeStyles } from '@material-ui/core';
import { HomeStyle } from '../Home/HomeStyle';

const useStyles = makeStyles((theme) => HomeStyle(theme));

export const Home = () => {
    const classes = useStyles();

    return <section className={classes.container}>
          <h1>HOME-Pagina principal en construccion</h1>
    </section>;

}