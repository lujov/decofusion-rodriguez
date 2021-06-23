import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { ItemListContainerStyle } from '../ItemListContainer/ItemListContainerStyle';
import { ItemList } from '../ItemListContainer/components/ItemList/ItemList';
import Loader from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));

const items = () => {
    return new Promise ((resolve,reject) => {
        setTimeout (()=>resolve(
            [
                {
                    id: "1",
                    catId: "4",
                    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRan69EmUJlVSTDUtFL4Z_kSF2DRmGXBX2WEQ&usqp=CAU",
                    title: "ALMOHADON TERRA",
                    description: "Almohadon de pana y algodon. En varios colores de paleta tono tierra. Con cierre invisible",
                    price: "$975",
                    color: ["rosa","amarillo","terracota"]
                },
                {
                    id: "2",
                    catId: "2", 
                    pictureUrl: "https://www.hogarmasmil.com/13054-home_default/jarron-blancoazul-ceramica-19x19x35.jpg",
                    title: "JARRON VINTAGE",
                    description: "Jarron blanco y azul desgastado. Hecho a mano y cocinado en horno de barro",
                    price: "$1200",
                    color: ["rosa","amarillo","terracota"]
                },
                {
                    id: "3", 
                    catId: "4",
                    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRan69EmUJlVSTDUtFL4Z_kSF2DRmGXBX2WEQ&usqp=CAU",
                    title: "ALMOHADON TERRA",
                    description: "Almohadon de pana y algodon. En varios colores de paleta tono tierra. Con cierre invisible",
                    price: "$975",
                    color: ["rosa","amarillo","terracota"]
                },
                {
                    id: "4",
                    catId: "2", 
                    pictureUrl: "https://www.hogarmasmil.com/13054-home_default/jarron-blancoazul-ceramica-19x19x35.jpg",
                    title: "JARRON VINTAGE",
                    description: "Jarron blanco y azul desgastado. Hecho a mano y cocinado en horno de barro",
                    price: "$1200",
                    color: ["rosa","amarillo","terracota"]
                },
                {
                    id: "5",
                    catId: "3", 
                    pictureUrl: "http://d3ugyf2ht6aenh.cloudfront.net/stores/085/512/products/maceta-12x12cm-crespo-blanca1-f995581abdd600ce9316083088183848-640-0.jpg",
                    title: "MACETA TERRAZO",
                    description: "JMaceta de terrazo. 5 lts de capadidad, 20 cm de diametro y 23 cm de altura",
                    price: "$1200",
                    color: ["rosa","amarillo","terracota"]
                },
                {
                    id: "6",
                    catId: "1", 
                    pictureUrl: "https://plusmarket.com.ar/wp-content/uploads/2020/08/517UpBwQanL._AC_SL1000_.jpg",
                    title: "CUBIERTOS DE SUSHI",
                    description: "Set x 12. Cubiertos dorados con mango blanco de acero inoxidable. 3 Tenedores + 3 Cuchillos + 3 Cucharas Soperas + 3 Cucharas de té.",
                    price: "$12.500",
                    color: ["rosa","amarillo","terracota"]
                },
                {
                    id: "7", 
                    catId: "3",
                    pictureUrl: "http://d3ugyf2ht6aenh.cloudfront.net/stores/085/512/products/maceta-12x12cm-crespo-blanca1-f995581abdd600ce9316083088183848-640-0.jpg",
                    title: "MACETA TERRAZO",
                    description: "JMaceta de terrazo. 5 lts de capadidad, 20 cm de diametro y 23 cm de altura",
                    price: "$1200",
                    color: ["rosa","amarillo","terracota"]
                },
                {
                    id: "8",
                    catId: "1", 
                    pictureUrl: "https://plusmarket.com.ar/wp-content/uploads/2020/08/517UpBwQanL._AC_SL1000_.jpg",
                    title: "CUBIERTOS DE SUSHI",
                    description: "Set x 12. Cubiertos dorados con mango blanco de acero inoxidable. 3 Tenedores + 3 Cuchillos + 3 Cucharas Soperas + 3 Cucharas de té.",
                    price: "$12.500",
                    color: ["rosa","amarillo","terracota"]
                }
            ]
        ),2000)

    } )
    
}

export const ItemListContainer = ({ greeting }) => {
    const classes = useStyles();

    const { catId } = useParams();
    const [productos, setProductos] = useState([]);
    const [loader,SetLoader] = useState(false);

    const ejePromise = () => {
        SetLoader(true)
        items().then(
            data => {setProductos(data)
                    SetLoader(false)}
        )
    }

    useEffect(() => {
        ejePromise();
    },[]);

    const filterCatId = productos => productos.filter(producto => producto.catId === catId);

    return <section className={classes.container}>
        <h1>Productos</h1>
        { productos.length !==0 && <ItemList items={filterCatId(productos)}/> }
        { catId === undefined && <ItemList items={productos}/> }
        {
            loader && 
                <Loader
                type="Puff"
                color="#da7f8f"
                height={100}
                width={100}
            />
        }
    </section>;     
    
  }
