import React from 'react';
import { ItemDetailStyle } from '../ItemDetail/ItemDetailStyle';
import { makeStyles } from '@material-ui/core';
import { ItemCount } from '../ItemCount/ItemCount';
import { CreditCard } from '@material-ui/icons';
import { LocalAtm } from '@material-ui/icons';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ItemDetailStyle(theme));


export const ItemDetail = ({ item }) => {
    const classes = useStyles();
    let compra = 0;

    const onAdd = (count) => {
        compra = count;
    }

    const alertaCompra = () => {
        alert(`Compraste ${compra} unidad/es.`)
    }

    return <article className={classes.container}>
            <div className={classes.imgContainer}>
                <img src={item[0].pictureUrl} alt="Producto"></img>
            </div>
            <div className={classes.infoContainer}>
                <h3>{item[0].title}</h3>
                <p>{item[0].description}</p>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Color</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={item[0].color}
                    >
                        {
                            item[0].color.map((color,i) =>
                                <MenuItem value={color} key={i}>{color}</MenuItem>
                            )
                        }
                    </Select>
                </FormControl><br></br>
                <span>{item[0].price}</span>
                <div className={classes.iconContainer}>
                    <CreditCard className={classes.icon}/><h4>6 cuotas sin interés</h4>
                </div>
                <div className={classes.iconContainer}>
                    <LocalAtm className={classes.icon}/><h4>10% de descuento con transferencia bancaria</h4>
                </div>    
                <div className={classes.btn}>
                    <ItemCount onAdd={onAdd} stock='7' initial='0'/>
                    <button onClick={alertaCompra}>Agregar</button>     
                </div>
            </div>
    </article>;

}