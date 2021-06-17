import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { ItemListContainerStyle } from './ItemListContainerStyle';
import { ItemList } from '../ItemList/ItemList'

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));

const items = () => {
    return new Promise ((resolve,reject) => {
        setTimeout (()=>resolve(
            [
                {
                    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRan69EmUJlVSTDUtFL4Z_kSF2DRmGXBX2WEQ&usqp=CAU",
                    title: "ALMOHADON TERRA",
                    description: "Almohadon de pana y algodon. En varios colores de paleta tono tierra",
                    price: "$975"
                },
                {
                    pictureUrl: "https://www.hogarmasmil.com/13054-home_default/jarron-blancoazul-ceramica-19x19x35.jpg",
                    title: "JARRON VINTAGE",
                    description: " Jarron blanco y azul desgastado",
                    price: "$1200"
                }
            ]
        ),2000)

    } )
    
}

export const ItemListContainer = ({ greeting }) => {
    const classes = useStyles();

    // const alertCompra = (countCompra) => {
    //     alert(`Compra realizada con éxito. Se compraron ${countCompra} unidad/es.`)
    // }

    // const onAdd = (countCompra) => {
    //     return countCompra;
    // }

    const [productos, setProductos] = useState([]);

    const ejePromise = () => {
        items().then(
            data => setProductos(data)
        )
    }

    useEffect(() => {
        ejePromise();
    },[]);

    return <section className={classes.container}>
        <h2>{ greeting }</h2>
        <ItemList items={productos} />
        {/* <button onClick={e => alertCompra(onAdd())}>Comprar</button>         */}
    </section>;     
    
  }
