import { makeStyles } from '@material-ui/core';
import { CartListContainerStyle } from './CartListContainerStyle';
import { CartList } from './CartList/CartList';
import { dataBase } from '../../firebase/fireBase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Loader from "react-loader-spinner";
import React,{useState} from 'react';

const useStyles = makeStyles((theme) => CartListContainerStyle(theme));

export const CartListContainer = () => {
    const classes = useStyles();
    const [loader,setLoader] = useState(false);
    const [idCompra,setIdCompra] = useState();

    const sendOrder = (name,phone,email,cart,price) => {

        setLoader(true);
        const orders = dataBase.collection('orders');
        const newOrder = {
            buyer: {
                name: name,
                phone: parseInt(phone),
                email: email
            },
            items: cart, 
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            price: price
        };
    
        orders.add(newOrder).then(doc => 
            setIdCompra(`Compra realizada con éxito. Tu id es: ${doc.id}`)
        )

        .catch(err => {
            console.log(err);
        }).finally(() => {
            setLoader(false);
        })
    
    }

    return <section className={classes.container}>
        <CartList sendOrder={sendOrder} idCompra={idCompra} />
        {
            loader && 
                <Loader
                type="Puff"
                color="#da7f8f"
                height={100}
                width={100}
            />
        }
    </section>
}
