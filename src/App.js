import React from 'react';
// import classes from '*.module.css';
import './App.css';
import { Router } from './router/Router';
import { AppStyle } from './AppStyle';
import { makeStyles } from '@material-ui/core';
import { CartComponentContext } from './Context/CartContext';

const useStyles = makeStyles((theme) => AppStyle(theme));

const App = () => {
  const classes = useStyles();

  return <section className={classes.container}>
    <CartComponentContext>
      <Router/>
    </CartComponentContext>
  </section>;     
  
}

export default App;
