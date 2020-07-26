import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducers";
import thunk from "redux-thunk";
import { saveState, loadState } from "./localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  { Cart: loadState() },
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState({
    cart: store.getState().Cart.cart,
  });
});

export default store;
