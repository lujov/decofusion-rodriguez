import React from 'react'; 
import logo2 from'./logo2.png'
import { NavBarStyle } from '../NavBar/NavBarStyle';
import { makeStyles } from '@material-ui/core';
import {Search} from '@material-ui/icons';
import {CardWidgets} from '../NavBar/CardWidgets/CardWidgets';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => NavBarStyle(theme));

export const NavBar = () => {
    const classes = useStyles();

    return <>
        <section className="body">
            <nav className={classes.container}>
                <div>
                    <Link className={classes.linkImg} to={'/'}><img src= {logo2} alt="logo"></img></Link>
                    <button type="button">
                        <i className="fas fa-bars"></i>
                    </button>
                    <ul>
                        <li>
                            <a href="/#"><Link to={'/'}>HOME</Link></a>
                        </li>
                        <li className={classes.subMenu}>
                            <a href="/#"><Link to={'/productos'}>PRODUCTOS</Link></a>
                            <ul>
                                <li>Bazar</li>
                                <li>Oficina</li>
                                <li>Muebles</li>
                                <li>Jardin</li>
                                <li>Textil</li>
                                <li>Macetas</li>
                            </ul>
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

  