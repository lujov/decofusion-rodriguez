import React from 'react';
import { makeStyles } from '@material-ui/core';
import { HomeStyle } from '../Home/HomeStyle';
import { PromosListContainer } from './components/PromosListContainer/PromosListContainer'

const useStyles = makeStyles((theme) => HomeStyle(theme));

export const Home = () => {
    const classes = useStyles();

    return <section className={classes.container}>
          <PromosListContainer />
    </section>;

}