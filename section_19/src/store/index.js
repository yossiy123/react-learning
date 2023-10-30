import { createSlice, configureStore } from '@reduxjs/toolkit';
// import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';


const defaultCounterState = {
    counter: 0,
    showCounter: true,
};

const counterSlice = createSlice({
    name: 'counter2',
    initialState: defaultCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

const defaultAuthState = {
    isAuth: false,
};

const authSlice = createSlice({
    name: 'auth2',
    initialState: defaultAuthState,
    reducers: {
        login(state) { state.isAuth = true; },
        logout(state) { state.isAuth = false; },
    },
});

// const reducers = combineReducers({
//     counter: counterSlice.reducer,
// });

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;