import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/user';
import { productReducer } from './reducers/product';
import {orderReducer} from './reducers/order'
import { wishlistReducer } from "./reducers/wishlist";
import { cartReducer } from "./reducers/cart";
import { sellerReducer } from './reducers/seller';
const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    order: orderReducer,
    wishlist: wishlistReducer,
    cart: cartReducer,
    seller : sellerReducer
  },
});

export default store;
