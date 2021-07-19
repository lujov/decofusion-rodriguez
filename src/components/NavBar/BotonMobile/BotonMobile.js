import React from 'react';
import './BotonMobile.css';

export const BotonMobile = ({setOpenMenuMobile,openMenuMobile}) => {

    const cambioMenu = () => {
        document.getElementById('hamburguesa').classList.toggle('cruz');
        setOpenMenuMobile(!openMenuMobile);
    }

    return <div className='contenedor' onClick={e => cambioMenu()}>
        <div id="hamburguesa" className='hamburguesa'></div>
    </div>
}