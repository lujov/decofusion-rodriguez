import React, {useState, useContext} from 'react';
import { ItemDetailStyle } from '../ItemDetail/ItemDetailStyle';
import { makeStyles } from '@material-ui/core';
import { ItemCount } from '../ItemCount/ItemCount';
import { CreditCard } from '@material-ui/icons';
import { LocalAtm } from '@material-ui/icons';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../Context/CartContext';
import notFound from '../../images/notFound.svg';

const useStyles = makeStyles((theme) => ItemDetailStyle(theme));


export const ItemDetail = ({ item }) => {
    const classes = useStyles();
    const [compra,setCompra] = useState();
    const [carrito,setCarrito] = useState(true);
    const {addItem} = useContext(CartContext);
    const [color,setColor] = useState();

    const onAdd = (quantityToAdd) => {
        setCompra(quantityToAdd)
    }

    const upPage = () => {
        window.scrollTo(0,0);
    }

    return <article className={classes.container}>
            
            {
                item.id===undefined ?
                <div className={classes.notFoundContainer}>
                    <h1>UPS! NO SE ENCONTRO EL PRODUCTO</h1>
                    <img src={notFound} alt="Not found" />
                </div> :
                <>
            <div className={classes.imgContainer}>
                <img src={item.pictureUrl} alt="Producto"></img>
            </div>
            <div className={classes.infoContainer}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            {carrito &&    
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Color</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Color"
                    onChange={e => setColor(e.target.value)}
                    defaultValue = ""
                    >
                        {
                            item.color.map((color,i) =>
                                <MenuItem value={color} key={i}>{color}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl>
            }
            <br></br>
                <span>${item.price}</span>
                <div className={classes.iconContainer}>
                    <CreditCard className={classes.icon}/><h4>6 cuotas sin interés</h4>
                </div>
                <div className={classes.iconContainer}>
                    <LocalAtm className={classes.icon}/><h4>10% de descuento con transferencia bancaria</h4>
                </div>    
                <div className={classes.btn}>
                    {carrito ?
                    <>
                    <ItemCount onAdd={onAdd} stock='7' initial='0'/>
                    <button onClick={e => setCarrito(false) & addItem(item,color,compra)}>Agregar</button>
                    </> :
                    <>
                    <Link to='/cart'>
                        <button onClick={e => upPage()}>Finalizar compra</button>
                    </Link>
                    <button onClick={e => setCarrito(true)}>Cancelar compra</button>
                    </>
                    }
                </div>
            </div>
            </> 
            }
            
    </article>;

}