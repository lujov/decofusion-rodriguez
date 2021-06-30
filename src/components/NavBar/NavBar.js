import React from 'react'; 
import logo2 from'./logo2.png';
import { NavBarStyle } from './NavBarStyle';
import { makeStyles } from '@material-ui/core';
import {Search} from '@material-ui/icons';
import {CardWidgets} from '../NavBar/CardWidgets/CardWidgets';
import { Link } from 'react-router-dom';
import { BotonMobile } from './BotonMobile/BotonMobile';

const useStyles = makeStyles((theme) => NavBarStyle(theme));

export const NavBar = () => {
    const classes = useStyles();

    return  <nav className={classes.container}>
        <div>
            <Link className={classes.linkImg} to={'/'}><img src= {logo2} alt="logo"></img></Link>
            <BotonMobile/>
            <ul>
                <li>
                    <Link to={'/'}>HOME</Link>
                </li>
                <li className={classes.subMenu}>
                    <Link to={'/productos'}>PRODUCTOS</Link>
                    <ul>
                        <li><Link to={'/category/1'}>Bazar</Link></li>
                        <li><Link to={'/category/2'}>Oficina</Link></li>
                        <li><Link to={'/category/3'}>Jardin</Link></li>
                        <li><Link to={'/category/4'}>Textil</Link></li>
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
            <Link to={'/cart'}><CardWidgets/></Link>
        </form>
    </nav>;    

       
  }

  