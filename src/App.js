import React from 'react';
// import classes from '*.module.css';
import './App.css';
import { Router } from './router/Router';
import { AppStyle } from './AppStyle';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => AppStyle(theme));

const App = () => {
  const classes = useStyles();

  return <section className={classes.container}>
    <Router/>
  </section>;     
  
}

export default App;
