import classnames from "classnames"
import styles from './index.module.css'
import { ExchangeRate } from "../ExchangeRate/ExchangeRate"
import { useState } from "react"
import { useSelector } from "react-redux"
import { selectCurrenciesList, selectCurrency} from "../../store/currencies/selectors"

export const Currencies = () => {

	const [currencyIndex, setCurrencyIndex] = useState(0)

	const currenciesList = useSelector(state => selectCurrenciesList(state))
	const currency = useSelector(state => selectCurrency(state, currencyIndex))

	const changeCurrency = (event) => {
		currenciesList.map((item,index) => {
			if (item[0] === event.target.value) setCurrencyIndex(index)
			return item
		})
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