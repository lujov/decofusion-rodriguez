import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { NavBar } from '../components/NavBar/NavBar';
import { ItemDetailContainer } from '../screens/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from '../screens/ItemListContainer/ItemListContainer';
import { Home } from '../screens/Home/Home';

export const Router = () => {
    return <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/productos">
                    <ItemListContainer/>
                </Route>
                <Route path="/item/:id">
                    <ItemDetailContainer />
                </Route>
            </Switch>
        </BrowserRouter>
}