import { exchangeRates } from "../../data/exchangeRates/exchangeRates"
import classnames from "classnames"
import styles from './index.module.css'
import { ExchangeRate } from "../ExchangeRate/ExchangeRate"
import { useState } from "react"

export const Currencies = ({ className }) => {
	const currenciesList = Object.entries(exchangeRates)

	const [currency, setCurrency] = useState(currenciesList[0])

	const changeCurrency = (event) => {
		const currency = currenciesList.find(item => item[0] === event.target.value)
		setCurrency(currency)
	}

	return (
		<div className={classnames(styles.root)}>
			<select
				className={classnames(styles.select)}
				onChange={changeCurrency}
			>
				{currenciesList.map((item, index) => {
					return <option key={index}>
						{item[0]}
					</option>
				})}
			</select>
			<ExchangeRate currency={currency} className={classnames(styles.section)}></ExchangeRate>
		</div>

	)
}