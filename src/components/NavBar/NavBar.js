import React from 'react'; 
import logo2 from'./logo2.png'
import { NavBarStyle } from './NavBarStyle';
import { makeStyles } from '@material-ui/core';
import {Search} from '@material-ui/icons';
import {CardWidgets} from '../CardWidgets/CardWidgets'

const useStyles = makeStyles((theme) => NavBarStyle(theme));

export const NavBar = () => {
    const classes = useStyles();

    return <>
        <section className="body">
            <nav className={classes.container}>
                <div>
                    <img src= {logo2} alt="logo"></img>
                    <button type="button">
                        <i className="fas fa-bars"></i>
                    </button>
                    <ul>
                        <li>
                            <a href="/#">HOME</a>
                        </li>
                        <li>
                            <a href="/#">PRODUCTOS</a>
                        </li>
                        <li>
                        <a href="/#">CONTACTO</a>
                        </li>
                    </ul>
                </div>
                <form>
                    <input type="search" placeholder="Search"></input>
                    <button type="submit"><Search className={classes.btn}/></button>
                    <CardWidgets/>
                </form>
            </nav>
        </section>
    </>;     
    
  }

  