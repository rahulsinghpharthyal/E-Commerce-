import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';
import { getProductReducer, getPrductDetailsReducer } from './reducers/productsReducer';
import { cartReducer } from './reducers/cartReducer';



const reducer = combineReducers({
    getProducts: getProductReducer,
    getProductDetails: getPrductDetailsReducer,
    cart: cartReducer,
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;