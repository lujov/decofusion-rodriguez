import React,{useState} from 'react'; 
import logo2 from'./logo2.png';
import { NavBarStyle } from './NavBarStyle';
import { makeStyles } from '@material-ui/core';
import {CardWidgets} from '../NavBar/CardWidgets/CardWidgets';
import { Link } from 'react-router-dom';
import { BotonMobile } from './BotonMobile/BotonMobile';

const useStyles = makeStyles((theme) => NavBarStyle(theme));

export const NavBar = () => {
    const classes = useStyles();
    const [openMenuMobile,setOpenMenuMobile] = useState(false);

    const upPage = () => {
        window.scrollTo(0,0);
    }

    const downPage = () => {
        window.scrollTo(500000,500000);
    }

    return  <nav className={classes.container}>
        <section className={classes.menuDesktop}>
            <div className={classes.logoItems}>
                <Link className={classes.linkImg} to={'/'}><img onClick={e => upPage()} src= {logo2} alt="logo"></img></Link>
                <div className={classes.btnMobile}>
                    <BotonMobile setOpenMenuMobile={setOpenMenuMobile} openMenuMobile={openMenuMobile} />
                </div>
                <ul>
                    <li onClick={e => upPage()}>
                        <Link to={'/'}>HOME</Link>
                    </li>
                    <li className={classes.subMenu}>
                        <Link className={classes.productos} to={'/productos'}>PRODUCTOS</Link>
                        <ul>
                            <li onClick={e => upPage()}><Link to={'/category/1'}>Bazar</Link></li>
                            <li onClick={e => upPage()}><Link to={'/category/2'}>Oficina</Link></li>
                            <li onClick={e => upPage()}><Link to={'/category/3'}>Jardin</Link></li>
                            <li onClick={e => upPage()}><Link to={'/category/4'}>Textil</Link></li>
                            <li onClick={e => upPage()}><Link to={'/category/5'}>Dormitorio</Link></li>
                            <li onClick={e => upPage()}><Link to={'/category/6'}>Estar-comedor</Link></li>
                            <li onClick={e => upPage()}><Link to={'/category/7'}>Iluminación</Link></li>
                        </ul>
                    </li>
                    <li onClick={e => downPage()} className={classes.contacto} >
                        CONTACTO
                    </li>
                </ul>
            </div>
            <div className={classes.widgetsContainer}>
                <Link to={'/cart'}><CardWidgets/></Link>
            </div>
        </section>
        {
        openMenuMobile &&
            <div className={classes.menuMobile}>
                <div>
                    <Link to={'/'}>HOME</Link>
                </div>
                <div className={classes.subMenuMobile}>
                    <Link to={'/productos'}>PRODUCTOS</Link>
                    <ul>
                        <li><Link to={'/category/1'}>Bazar</Link></li>
                        <li><Link to={'/category/2'}>Oficina</Link></li>
                        <li><Link to={'/category/3'}>Jardin</Link></li>
                        <li><Link to={'/category/4'}>Textil</Link></li>
                        <li><Link to={'/category/5'}>Dormitorio</Link></li>
                        <li><Link to={'/category/6'}>Estar-comedor</Link></li>
                        <li><Link to={'/category/7'}>Iluminación</Link></li>
                    </ul>
                </div>
                <div>
                    <a href="/#">CONTACTO</a>
                </div>
            </div>
        }
    </nav>;    

       
  }

  