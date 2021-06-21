import React, {useEffect,useState} from 'react';
import { ItemDetailContainerStyle } from '../ItemDetailContainer/ItemDetailContainerStyle';
import { makeStyles } from '@material-ui/core';
import { ItemDetail } from '../ItemDetailContainer/components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ItemDetailContainerStyle(theme));

const getItems = () => {
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

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [productoSeleccionado, setProductoSeleccionado] = useState([]);

    useEffect(() => {
        getItems().then(
            data => setProductoSeleccionado(data)
        )
    },[]);

    useEffect(() => {}, [id]);

    const filterId = productoSeleccionado => productoSeleccionado.find(producto => producto.id === id);

    return <section className={classes.container}>
        <ItemDetail item={filterId(productoSeleccionado)}/>

    </section>;

}