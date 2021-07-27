import React, {useEffect,useState} from 'react';
import { ItemDetailContainerStyle } from '../ItemDetailContainer/ItemDetailContainerStyle';
import { makeStyles } from '@material-ui/core';
import { ItemDetail } from '../ItemDetailContainer/components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { dataBase} from '../../firebase/fireBase';

const useStyles = makeStyles((theme) => ItemDetailContainerStyle(theme));

export const ItemDetailContainer = () => {
    const classes = useStyles();
    const { id } = useParams();
    const [productoSeleccionado, setProductoSeleccionado] = useState([]);
    const [loader,SetLoader] = useState(false);

    useEffect(() => {
        SetLoader(true);
        const itemCollection = dataBase.collection("productos");
        const item = itemCollection.doc(id);

        item.get().then((doc) => {
            if(!doc.exists) {
                setProductoSeleccionado({ id: undefined });
                return;
            }
            setProductoSeleccionado({ id: doc.id, ...doc.data() });
        }).catch((error) => {
            console.log("Error en la carga del producto",error);
        }).finally(() => {
            SetLoader(false);
        })
        
    },[id]);
        
    return <section className={classes.container}>
        {productoSeleccionado.length !==0 && <ItemDetail item={productoSeleccionado}/>}
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