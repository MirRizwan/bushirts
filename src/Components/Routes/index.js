import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ProductDetail from '../../Pages/ProductDetail';
import Products from '../../Pages/Products';
import Home from '../../Pages/Home';


const Routes=()=>{
    return(
        <React.Fragment>
            <Header />
     
            <Switch>
                <Route component={Home} path="/" exact />
                <Route path="/products" component={Products}  />
                <Route path="/product/:id" component={ProductDetail} exact  />
                
                
                
            </Switch>
            <Footer />
        </React.Fragment>
		
    )
}
export default Routes;