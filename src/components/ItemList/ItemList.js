import React, { useEffect, useState } from 'react';
import { ItemListStyle } from './ItemListStyle';
import { makeStyles } from '@material-ui/core';
import { Item } from '../Item/Item';

const useStyles = makeStyles((theme) => ItemListStyle(theme));

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


export const ItemList = () => {
    const classes = useStyles();

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
        {productos.map((producto,i) =>
            <Item
                key={i}
                item={producto}
            />
        
        )}
        
    </section>;

}













































































































