import React,{ useContext } from 'react';
import { ItemListStyle } from '../ItemList/ItemListStyle';
import { makeStyles } from '@material-ui/core';
import { Item } from '../Item/Item';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../Context/CartContext';

const useStyles = makeStyles((theme) => ItemListStyle(theme));

export const ItemList = ({ items,comboId }) => {
    const classes = useStyles();
    const {addItemCombo} = useContext(CartContext);
    
    let totalPrice = 0;
    items.map((producto) =>
        totalPrice = totalPrice + parseInt(producto.price)
    )
    let discountPrice = totalPrice*0.8;

    return <section className={classes.container}>
        <article className={classes.itemsContainer}>
            {items.map((producto,i) =>
                <Link to={`/item/${producto.id}`} key={i}>
                    <Item
                        item={producto}
                    />
                </Link>
            )}
        </article>
        <div className={classes.divisor}></div>
        <article className={classes.infoContainer}>
            <p>Super oferta de combos! Al llevar todos los productos seleccionados en combo, te regalamos un 20% de descuento sobre el total real. Los colores del combo no se pueden seleccionar, son los que se ven en las imagenes</p>
            <div>
                <h1>PRECIO REAL: <del>${totalPrice}</del></h1>
                <h1>PRECIO EN COMBO: ${discountPrice}</h1>
            </div>
            <Link to="/cart" className={classes.carritoBtn}><button onClick={e => addItemCombo(comboId)}>Agregar combo al carrito</button></Link>
        </article>
        
    </section>;

}















































































































