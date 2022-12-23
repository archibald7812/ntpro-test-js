import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { currenciesSlice } from "./currencies/currenciesSlice";
import { ordersSlice } from "./orders/ordersSlice";
import { timerSlice } from "./timer/timerSlice";

const RootReducer = combineReducers({
	orders: ordersSlice.reducer,
	currencies: currenciesSlice.reducer,
	timer: timerSlice.reducer
})

export const store = configureStore({
	reducer: RootReducer
})