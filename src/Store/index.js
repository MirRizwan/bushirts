import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers";
import thunk from "redux-thunk";
import { saveState, loadCartState, loadTotalAmount } from "./localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  { Cart: { cart: loadCartState(), totalAmount: loadTotalAmount() } },
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState({
    cart: store.getState().Cart.cart,
    totalAmount: store.getState().Cart.totalAmount,
  });
});

export default store;
