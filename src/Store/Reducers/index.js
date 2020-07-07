import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';


const rootReducer = combineReducers({Cart: cartReducer, Products: productsReducer});

export default rootReducer;