import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BotonMobileStyle } from './BotonMobileStyle';
import './BotonMobile.css';

const useStyles = makeStyles((theme) => BotonMobileStyle(theme));

export const BotonMobile = () => {
    const classes = useStyles();

    const cambioMenu = () => {
        document.getElementById('hamburguesa').classList.toggle('cruz');
    }

    return <div className='contenedor' onClick={e => cambioMenu()}>
        <div id="hamburguesa" className='hamburguesa'></div>
    </div>
}