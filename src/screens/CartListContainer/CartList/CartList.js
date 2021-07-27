import React,{useContext,useState} from 'react';
import { makeStyles } from '@material-ui/core';
import { CartListStyle } from '../CartList/CartListStyle';
import { CartContext } from '../../../Context/CartContext';
import { Cart } from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { PersonalInfo } from '../PersonalInfo/PersonalInfo';

const useStyles = makeStyles((theme) => CartListStyle(theme));

export const CartList = ({ sendOrder,idCompra }) => {
    const classes = useStyles();
    const { cart,clear } = useContext(CartContext);
    const [openPersonalInfo,setOpenPersonalInfo] = useState(false);

    let totalPrice = 0;
    cart.map((producto) =>
        totalPrice = totalPrice + parseInt(producto.item.price)*producto.quantity
    )

    const sendInfo = (name,phone,email) => {
        sendOrder(name,phone,email,cart,totalPrice);
        setOpenPersonalInfo(false);
        clear();
    }

    return<section className={classes.container}>
        <article className={classes.cartTitle}>
            <h2>TU CARRITO</h2>
        </article>
        <article className={classes.cartTable}>
            {
                cart.length===0 ?
                <>
                    <h2>No hay productos en el carrito</h2>
                    {idCompra!==undefined && <h2>{idCompra}</h2>}
                    <Link to="/productos">
                        <button className={classes.btn}>Tienda</button>
                    </Link>
                </>
                :
                <>
                    {cart.map((item,i) => 
                        <Cart key={i} item={item} />
                    )}
                    <div className={classes.divisor}></div>
                    <div className={classes.finalInfo}>
                        <h2>${totalPrice}</h2>
                        <button className={classes.btnClear} onClick={e => setOpenPersonalInfo(!openPersonalInfo)}>Comprar!</button>
                        <button className={classes.btnClear} onClick={e => clear()}>Limpiar carrito</button>
                    </div>
                    <PersonalInfo openPersonalInfo={openPersonalInfo} setOpenPersonalInfo={setOpenPersonalInfo} sendInfo={sendInfo} />
                </>
            }
        </article>
    </section>
}
