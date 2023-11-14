import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './slices/cart-slice';
import uiReducer from './slices/ui-slice';


const store = configureStore({
	reducer: {
		cart: cartReducer, 
		ui: uiReducer,
	},
});

export default store;