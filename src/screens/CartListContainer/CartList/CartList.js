import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core';
import { CartListStyle } from '../CartList/CartListStyle';
import { CartContext } from '../../../Context/CartContext';
import { Cart } from '../Cart/Cart';

const useStyles = makeStyles((theme) => CartListStyle(theme));

export const CartList = () => {
    const classes = useStyles();
    const { cart } = useContext(CartContext);

    return<div className={classes.container}>
        <div>
            <h2>TU CARRITO</h2>
        </div>
        <table>
            <thead>
                <tr>
                    {/* {{!-- <th>PRODUCTO</th> --}} */}
                    <th>PRODUCTO</th>
                    <th>CANTIDAD</th>
                    <th>PRECIO</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart.length===0 ?
                    <>
                    <h2>No hay productos en el carrito</h2>
                    <Cart item={undefined} />
                    </>
                    :
                    cart.map((item,i) => 
                        <Cart key={i} item={item} />
                    )
                }
            </tbody>
        </table>
    </div>
}
