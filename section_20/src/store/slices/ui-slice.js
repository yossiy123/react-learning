import { createSlice } from '@reduxjs/toolkit';

const initUiState = {
    cartIsVisible: false,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState: initUiState,
	reducers: {
		toggle(state) { state.cartIsVisible = !state.cartIsVisible; },
	},
});

const uiActions = uiSlice.actions;
const uiReducer = uiSlice.reducer;

export { uiActions };
export default uiReducer;
