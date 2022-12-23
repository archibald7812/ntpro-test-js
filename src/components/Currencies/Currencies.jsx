import classnames from "classnames"
import styles from './index.module.css'
import { ExchangeRate } from "../ExchangeRate/ExchangeRate"
import { useLayoutEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectAllCurrencies } from "../../store/currencies/selectors"

export const Currencies = () => {

	const initialExchangeRates = useSelector(state => selectAllCurrencies(state))

	const [exchangeRates, setExchangeRates] = useState(initialExchangeRates)
	const [currenciesList, setCurrenciesList] = useState(Object.entries(exchangeRates))
	const [currency, setCurrency] = useState(currenciesList[0])

	useLayoutEffect(() => {
		setExchangeRates(initialExchangeRates)
		setCurrenciesList(Object.entries(exchangeRates))
		setCurrency(currenciesList.find(item => item[0] === currency[0]))
	}, [initialExchangeRates])

	const changeCurrency = (event) => {
		setCurrency(currenciesList.find(item => item[0] === event.target.value))
	}

	return (
		<div className={classnames(styles.root)}>
			<select
				className={classnames(styles.select)}
				onChange={changeCurrency}
			>
				{currenciesList.map((item, index) => {
					return <option key={index} className={classnames(styles.option)}>
						{item[0]}
					</option>
				})}
			</select>
			<ExchangeRate currency={currency} className={classnames(styles.section)}></ExchangeRate>
		</div>

	)
}