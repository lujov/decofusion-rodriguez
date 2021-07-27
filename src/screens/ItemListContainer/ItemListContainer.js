import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { ItemListContainerStyle } from '../ItemListContainer/ItemListContainerStyle';
import { ItemList } from '../ItemListContainer/components/ItemList/ItemList';
import Loader from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { dataBase } from '../../firebase/fireBase';

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));

export const ItemListContainer = () => {
    const classes = useStyles();

    const { catId } = useParams();
    const [productos, setProductos] = useState([]);
    const [loader,SetLoader] = useState(false);


    useEffect(() => {
        SetLoader(true);
        const itemCollection = dataBase.collection("productos");
        const categorySelected = catId === undefined ? itemCollection : itemCollection.where('catId','==',catId);

        categorySelected.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No results!')
            }
            setProductos(querySnapshot.docs.map(doc=> ({id: doc.id, ...doc.data()})))
        }).catch((error) => {
            console.log("Error searching items", error);
        }).finally(() => {
            SetLoader(false);
        });

    },[catId]);

    return <section className={classes.container}>
        <div className={classes.itemTitle}>
            {catId===undefined && <h1>Productos</h1>}
            {catId==="1" && <h1>Bazar</h1>}
            {catId==="2" && <h1>Oficina</h1>}
            {catId==="3" && <h1>Jardin</h1>}
            {catId==="4" && <h1>Textil</h1>}
            {catId==="5" && <h1>Dormitorio</h1>}
            {catId==="6" && <h1>Estar-comedor</h1>}
            {catId==="7" && <h1>Iluminación</h1>}
        </div>
        {
            loader && 
                <Loader
                type="Puff"
                color="#da7f8f"
                height={100}
                width={100}
            />
        }
        <ItemList items={productos}/>
    </section>;     
    
  }
