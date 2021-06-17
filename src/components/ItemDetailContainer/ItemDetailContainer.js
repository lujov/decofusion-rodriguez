import React, {useEffect,useState} from 'react';
import { ItemDetailContainerStyle } from './ItemDetailContainerStyle';
import { makeStyles } from '@material-ui/core';
import { ItemDetail } from '../ItemDetail/ItemDetail';

const useStyles = makeStyles((theme) => ItemDetailContainerStyle(theme));

const getItems = () => {
    return new Promise ((resolve,reject) => {
        setTimeout (()=>resolve(
                {
                    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRan69EmUJlVSTDUtFL4Z_kSF2DRmGXBX2WEQ&usqp=CAU",
                    title: "ALMOHADON TERRA",
                    description: "Almohadon de pana y algodon. En varios colores de paleta tono tierra",
                    price: "$975"
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