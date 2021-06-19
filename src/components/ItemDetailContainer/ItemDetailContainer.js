import React, {useEffect,useState} from 'react';
import { ItemDetailContainerStyle } from './ItemDetailContainerStyle';
import { makeStyles } from '@material-ui/core';
import { ItemDetail } from '../ItemDetail/ItemDetail';

const useStyles = makeStyles((theme) => ItemDetailContainerStyle(theme));

const getItems = () => {
    return new Promise ((resolve,reject) => {
        setTimeout (()=>resolve(
                {
                    pictureUrl: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
                    title: "ALMOHADON TERRA",
                    description: "Almohadon de pana y algodon. Disponible en varios colores de paleta tono tierra y dos diferentes tamaños: 20x20cm y 40x40cm. Relleno de vellón siliconado incluido y cierre invisible. ",
                    price: "$975",
                    color: "Terracota"
                }
        ),2000)

    } )
    
}

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const [productoSeleccionado, setProductoSeleccionado] = useState([]);

    useEffect(() => {
        getItems().then(
            data => setProductoSeleccionado(data)
        )
    },[]);

    return <section className={classes.container}>
        <h1>ITEM DETALLE</h1>
        <ItemDetail item={productoSeleccionado}/>

    </section>;

}