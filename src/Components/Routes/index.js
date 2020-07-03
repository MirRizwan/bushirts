import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Products from '../../Pages/Products';
import Home from '../../Pages/Home';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Routes=()=>{
    return(
        <React.Fragment>
            <Header />
            <Switch>
                <Route component={Products} path="/products" />
                <Route component={Home} path="/" />
            </Switch>
            <Footer />
        </React.Fragment>
		
    )
}
export default Routes;