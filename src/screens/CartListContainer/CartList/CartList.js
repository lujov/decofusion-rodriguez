import React from 'react';
import { makeStyles } from '@material-ui/core';
import { CartListStyle } from '../CartList/CartListStyle'

const useStyles = makeStyles((theme) => CartListStyle(theme));

export const CartList = () => {
    const classes = useStyles();

    return<div className={classes.container}>
        <div>
            <h2>TUS PRODUCTOS</h2>
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
                <tr>
                    {/* {{!-- <td class="img-carrito-container"><img class="img-prod-carrito" src="imagenes/producto.jpg" alt=""></td> --}} */}
                    <td><p>Nombre</p></td>
                    <td>
                        <div>
                            <form>
                                <input type="number" id="cantidad" name="cantidad"></input>
                                <button>Actualizar cantidad</button>
                            </form>
                        </div>
                    </td>
                    <td class="carrito-precio-container">
                        <span class="carrito-precio">precio</span>
                        <input type="text" name="precio"></input>
                        <a href="" class="btn btn-danger">Eliminar producto</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
}
