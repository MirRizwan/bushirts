import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ProductDetail from '../../Pages/ProductDetail';
import Products from '../../Pages/Products';
import Home from '../../Pages/Home';
import NotFound from '../NotFound';


const Routes=()=>{
    return(
        <React.Fragment>
            <Header />
     
            <Switch>
                <Route path="/product/:id" component={ProductDetail}  />
                <Route path="/products" component={Products}  />
                
                <Route component={Home} path="/" exact />
                <Route path="*" component={NotFound} />
                
            </Switch>
            <Footer />
        </React.Fragment>
		
    )
}
export default Routes;