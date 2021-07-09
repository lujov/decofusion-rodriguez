import React,{useContext,useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { CartListStyle } from '../CartList/CartListStyle';
import { CartContext } from '../../../Context/CartContext';
import { Cart } from '../Cart/Cart';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => CartListStyle(theme));

export const CartList = ({ sendOrder }) => {
    const classes = useStyles();
    const { cart,clear } = useContext(CartContext);
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [email,setEmail] = useState();

    let totalPrice = 0;
    cart.map((producto) =>
        totalPrice = totalPrice + parseInt(producto.item.price)*producto.quantity
    )

    return<section className={classes.container}>
        <article>
            <h2>TU CARRITO</h2>
        </article>
        <table>
            <tbody>
                {
                    cart.length===0 ?
                    <>
                        <h2>No hay productos en el carrito</h2>
                        <Link to="/productos">
                            <button className={classes.btn}>Tienda</button>
                        </Link>
                        {/* <Cart item={undefined} /> */}
                    </>
                    :
                    <>
                    {cart.map((item,i) => 
                        <Cart key={i} item={item} />
                    )}
                    <div className={classes.divisor}></div>
                    <h2>${totalPrice}</h2>
                    <button className={classes.btnClear} onClick={e => clear()}>Limpiar carrito</button>
                    <input placeholder="Nombre" onChange={e => setName(e.target.value)}></input>
                    <input placeholder="Telefono" onChange={e => setPhone(e.target.value)}></input>
                    <input placeholder="Mail" onChange={e => setEmail(e.target.value)}></input>
                    <button className={classes.btn} onClick={e => sendOrder(name,phone,email,cart,totalPrice)}>
                        Enviar orden
                    </button>
                    </>
                }
            </tbody>
        </table>
    </section>
}
