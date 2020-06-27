import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Products from '../../Pages/Products';
import Home from '../../Pages/Home';

const Routes=()=>{
    return(
        <Switch>
            <Route component={Products} path="/products" />
            <Route component={Home} path="/" />
        </Switch>
    )
}
export default Routes;