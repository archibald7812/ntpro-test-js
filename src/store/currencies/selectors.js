export const selectCurrenciesList = state => Object.entries(state.currencies.currencies)
export const selectCurrency = (state,index) => Object.entries(state.currencies.currencies)[index]

