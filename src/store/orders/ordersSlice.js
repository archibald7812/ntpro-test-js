import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	orders: []
}

export const ordersSlice = createSlice({
	name: 'orders',
	initialState: initialState,
	reducers: {
		addOrder: (state, action) => {
			state.orders.unshift(action.payload)
		},
	}
})

export const { addOrder } = ordersSlice.actions