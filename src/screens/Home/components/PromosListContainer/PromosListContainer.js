import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { PromosListContainerStyle } from './PromosListContainerStyle';
import { PromosList } from './Components/PromosList'
import Loader from 'react-loader-spinner';

const useStyles = makeStyles((theme) => PromosListContainerStyle(theme));

const promos = () => {
    return new Promise ((resolve,reject) => {
        setTimeout (()=>resolve(
            [
                {
                    id: 1, 
                    pictureUrl: "https://images.unsplash.com/photo-1617485824876-25e1f8747348?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                    title: "Combo oficina",
                    
                },
                {
                    id: 2, 
                    pictureUrl: "https://images.unsplash.com/photo-1556037843-347ddff9f4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                    title: "Combo cocina",
                },
                {
                    id: 3, 
                    pictureUrl: "https://images.unsplash.com/photo-1606425288528-4cebbfc69de7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                    title: "Combo estar",
                },
                {
                    id: 4, 
                    pictureUrl: "https://images.unsplash.com/photo-1623944436679-5412c658a358?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
                    title: "Combo dormitorio",
                },
            ]
        ),2000)

    } )
    
}

export const PromosListContainer = () => {
    const classes = useStyles();

    const [combos, setCombos] = useState([]);
    const [loader,SetLoader] = useState(false);

    const ejePromise = () => {
        SetLoader(true)
        promos().then(
            data => {setCombos(data)
                    SetLoader(false)}
        )
    }

    useEffect(() => {
        ejePromise();
    },[]);


    return <article className={classes.container}>
        <PromosList promos={combos} />
        {
            loader && 
                <Loader
                type="Puff"
                color="#da7f8f"
                height={100}
                width={100}
            />
        }
    </article>
}    