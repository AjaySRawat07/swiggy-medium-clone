import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './cartStore';

const AppStore = configureStore({
    reducer : {
        cart: cartReducer,
    }
    
});

export default AppStore;