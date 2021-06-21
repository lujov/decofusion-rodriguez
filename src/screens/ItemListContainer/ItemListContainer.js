import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { ItemListContainerStyle } from '../ItemListContainer/ItemListContainerStyle';
import { ItemList } from '../ItemListContainer/components/ItemList/ItemList'

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));

const items = () => {
    return new Promise ((resolve,reject) => {
        setTimeout (()=>resolve(
            [
                {
                    id: 1, 
                    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRan69EmUJlVSTDUtFL4Z_kSF2DRmGXBX2WEQ&usqp=CAU",
                    title: "ALMOHADON TERRA",
                    description: "Almohadon de pana y algodon. En varios colores de paleta tono tierra",
                    price: "$975"
                },
                {
                    id: 2, 
                    pictureUrl: "https://www.hogarmasmil.com/13054-home_default/jarron-blancoazul-ceramica-19x19x35.jpg",
                    title: "JARRON VINTAGE",
                    description: " Jarron blanco y azul desgastado",
                    price: "$1200"
                },
                {
                    id: 3, 
                    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRan69EmUJlVSTDUtFL4Z_kSF2DRmGXBX2WEQ&usqp=CAU",
                    title: "ALMOHADON TERRA",
                    description: "Almohadon de pana y algodon. En varios colores de paleta tono tierra",
                    price: "$975"
                },
                {
                    id: 4, 
                    pictureUrl: "https://www.hogarmasmil.com/13054-home_default/jarron-blancoazul-ceramica-19x19x35.jpg",
                    title: "JARRON VINTAGE",
                    description: " Jarron blanco y azul desgastado",
                    price: "$1200"
                },
                {
                    id: 5, 
                    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRan69EmUJlVSTDUtFL4Z_kSF2DRmGXBX2WEQ&usqp=CAU",
                    title: "ALMOHADON TERRA",
                    description: "Almohadon de pana y algodon. En varios colores de paleta tono tierra",
                    price: "$975"
                },
                {
                    id: 6, 
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
        <h1>Productos</h1>
        <ItemList items={productos} />
    </section>;     
    
  }
