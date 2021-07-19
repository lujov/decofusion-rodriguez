import React,{useState} from 'react'; 
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
    const [openMenuMobile,setOpenMenuMobile] = useState(false);

    return  <nav className={classes.container}>
        <section className={classes.menuDesktop}>
            <div>
                <Link className={classes.linkImg} to={'/'}><img src= {logo2} alt="logo"></img></Link>
                <div className={classes.btnMobile}>
                    <BotonMobile setOpenMenuMobile={setOpenMenuMobile} openMenuMobile={openMenuMobile} />
                </div>
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
                <div className={classes.widgetsContainer}>
                    <button type="submit"><Search className={classes.btn}/></button>
                    <Link to={'/cart'}><CardWidgets/></Link>
                </div>
            </form>
        </section>
        {
        openMenuMobile &&
            <div className={classes.menuMobile}>
                <div>
                    <Link to={'/'}>HOME</Link>
                </div>
                <div className={classes.subMenu}>
                    <Link to={'/productos'}>PRODUCTOS</Link>
                    <ul>
                        <li><Link to={'/category/1'}>Bazar</Link></li>
                        <li><Link to={'/category/2'}>Oficina</Link></li>
                        <li><Link to={'/category/3'}>Jardin</Link></li>
                        <li><Link to={'/category/4'}>Textil</Link></li>
                    </ul>
                </div>
                <div>
                    <a href="/#">CONTACTO</a>
                </div>
            </div>
        }
    </nav>;    

       
  }

  