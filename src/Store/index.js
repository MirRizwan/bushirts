import {createStore, applyMiddleware} from 'redux';
import productsReducer from './Reducers/productsReducer';
import thunk from 'redux-thunk';


const store =  createStore(productsReducer,applyMiddleware(thunk));

export default store;