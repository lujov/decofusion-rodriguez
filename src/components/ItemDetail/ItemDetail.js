import React from 'react';
import { ItemDetailStyle } from './ItemDetailStyle';
import { makeStyles } from '@material-ui/core';
import { ItemCount } from '../ItemCount/ItemCount';

const useStyles = makeStyles((theme) => ItemDetailStyle(theme));


export const ItemDetail = ({ item }) => {
    const classes = useStyles();
    let compra = 0;

    const onAdd = (count) => {
        compra = count;
    }

    const alertaCompra = () => {
        alert(`Compraste ${compra} unidad/es.`)
    }

    return <article className={classes.container}>
            <img src={item.pictureUrl} alt="Producto"></img>
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>{item.price}</span>
                <h4>6 cuotas sin interés</h4>
                <h4>10% de descuento con transferencia bancaria</h4>     
                <div>
                    <ItemCount onAdd={onAdd} stock='7' initial='0'/>
                    <button onClick={alertaCompra}>Comprar</button>     
                </div>
            </div>
    </article>;

}