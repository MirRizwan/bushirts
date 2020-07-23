import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import ProductDetail from '../../Pages/ProductDetail';
import Products from '../../Pages/Products';
import Home from '../../Pages/Home';
import NotFound from '../../Pages/NotFound';
import CartPage from '../../Pages/CartPage';



const Routes=()=>{
    return(
        <React.Fragment>
            <Header />
            
            <Switch>
                <Route path="/product/:id" component={ProductDetail} exact />
                <Route path="/products" component={Products} exact />
                <Route path="/cart" component={CartPage} />
                <Route component={Home} path="/" exact />
                <Route path="/not-found" component={NotFound}/>
                <Redirect to="/not-found" />
                
            </Switch>
            <Footer />
        </React.Fragment>
		
    )
}
export default Routes;