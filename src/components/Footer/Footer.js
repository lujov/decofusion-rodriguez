import React from 'react';
import { FooterStyle } from './FooterStyle';
import { makeStyles } from '@material-ui/core';
import './Footer.css';

const useStyles = makeStyles((theme) => FooterStyle(theme));

export const Footer = () => {
    const classes = useStyles();
    
    return  <footer className={classes.container}>
        <h2>Contacto</h2>
        <section>
            <article className={classes.contactoInfo}>
                <div>
                    <span className={classes.mailContainer}><i className="fas fa-envelope"></i><p>decofusion@gmail.com</p></span> 
                    <span className={classes.numberContainer}><i className="fas fa-phone"></i><p>02226-492168</p></span>
                </div>
                <div>
                    <h3>Nuestros horarios</h3> 
                    <div className={classes.horarioSemana} >
                        <p>Lunes a viernes: </p> 
                        <p> 9hs-18hs</p>
                    </div>
                    <div className={classes.horarioFinde} >
                        <p>Sabados:</p> 
                        <p>9hs-13hs</p>
                    </div>
                </div>
                <div>
                    <h3>Redes sociales</h3>
                    <a href="https://www.instagram.com/estudio.fusionarq/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/lucia.rodriguez.18847/"><i className="fab fa-facebook-square"></i></a>
                </div>
            </article>
            <article className={classes.contactoUbicacion}>
                <h3>Ubicación</h3>
                <iframe title="Nuestra ubicacion" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.856120339518!2d-58.436579684814355!3d-34.58250698046509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM0JzU3LjAiUyA1OMKwMjYnMDMuOCJX!5e0!3m2!1ses-419!2sar!4v1626739514284!5m2!1ses-419!2sar" width="400" height="300" allowFullScreen="" frameBorder="0" aria-hidden="false" tabIndex="0"></iframe>
            </article>
        </section>
     </footer>
   
}