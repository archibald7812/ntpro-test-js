import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"

export const currenciesAdapter = createEntityAdapter()

const emtyState = {
	currencies: {
		'USD/CAD': 0,
		'USD/EUR': 0,
		'USD/GBP': 0,
		'USD/YEN': 0,
		'USD/CHF': 0,
		'USD/RUB': 0,
	}

}
const initialState = { currencies: {} }
for (const currency of Object.keys(emtyState.currencies)) {
	initialState.currencies[currency] = (Math.random() * 10).toFixed(3)
}

export const currenciesSlice = createSlice({
	name: 'currencies',
	initialState: initialState,
	reducers: {
		updateCurrencies: (state, action) => {
			const result = {...emtyState}
			for (const currency of Object.keys(initialState.currencies)) {
				result.currencies[currency] = (Math.random() * 10).toFixed(3)
			}
			state.currencies = {...result.currencies}
		}
	}
})

export const { updateCurrencies } = currenciesSlice.actions;