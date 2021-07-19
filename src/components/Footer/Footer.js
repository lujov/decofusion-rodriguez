import React from 'react';
import { FooterStyle } from './FooterStyle';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => FooterStyle(theme));

export const Footer = () => {
    const classes = useStyles();
    
    return  <footer className={classes.container}>
        <h2>Contacto</h2>
        {/* <div>
            <div>
                <div>
                    <span><i class="fas fa-envelope"></i><p class="mail">mgjovanovich@yahoo.com</p></span> 
                    <span><i class="fas fa-phone-alt"></i><p class="numero">02226-492168</p></span>
                </div>
                <div>
                    <h3>Nuestros horarios</h3> 
                    <div>
                        <p>Lunes a viernes: </p> 
                        <p> 9hs-18hs</p>
                    </div>
                    <div>
                        <p>Sabados:</p> 
                        <p>9hs-13hs</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3>Redes sociales</h3>
                        <a href="https://www.instagram.com/farmaciajovanovich/" target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/FarmaciaJova" targuet="_blank"><i class="fab fa-facebook-square"></i></a>
                    </div>
                </div>
            </div>
            <div>
                <h3>Ubicación</h3>
                <iframe class="mapa-google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6538.338337395214!2d-58.67573487504543!3d-34.97742713046572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae32323136f760!2sFarmacia%20Jovanovich!5e0!3m2!1ses-419!2sar!4v1601408267261!5m2!1ses-419!2sar" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div> */}
     </footer>
   
}