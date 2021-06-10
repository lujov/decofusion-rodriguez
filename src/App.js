import React from 'react';
// import classes from '*.module.css';
import './App.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { AppStyle } from './AppStyle';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => AppStyle(theme));

const App = () => {
  const classes = useStyles();

  return <section className={classes.container}>
    <NavBar/>
    <ItemListContainer greeting= 'Aca va a estar la tienda'/>
  </section>;     
  
}

export default App;
