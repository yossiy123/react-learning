import { createSlice } from '@reduxjs/toolkit';

const initCartState = {
	items: [],
	totalQuantity: 0,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState: initCartState,
	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItems = state.items.find((item) => item.id === newItem.id);
			state.totalQuantity++;

			if (!existingItems) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
					name: newItem.title,
				})
			} else {
				existingItems.quantity++;
				existingItems.totalPrice += newItem.price;
			}
		},
		removeItemFromCart(state, action) {
			const itemId = action.payload;
			const existingItems = state.items.find((item) => item.id === itemId);
			state.totalQuantity--;

			if (existingItems.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== itemId);
			} else {
				existingItems.quantity--;
				existingItems.totalPrice -= existingItems.price;
			}
		},
	},
});

const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export { cartActions };
export default cartReducer;
