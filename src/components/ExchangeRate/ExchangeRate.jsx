import classnames from "classnames"
import { useState } from "react"
import { OrderWindow } from "../OrderWindow/OrderWindow"
import styles from './index.module.css'
export const ExchangeRate = ({ currency, className }) => {

	const calculatePrice = (price, factor) => {
		return (price * factor).toFixed(2)
	}

	const [active, setActive] = useState(false)
	const [orderType, setOrderType] = useState('BUY')

	const openOrderWindow = (event) => {
		setOrderType(event.target.innerHTML.split(' ')[0] || 'BUY')
		setActive(true)
	}

	const closeOrderWindow = () => {
		setActive(false)
	}

	return (
		<div className={classnames(styles.root, className)}>
			<div className={classnames(styles.buy, styles.price)} onClick={openOrderWindow}>BUY {calculatePrice(currency[1], 1.02)}</div>
			<div className={classnames(styles.sell, styles.price)} onClick={openOrderWindow}>SELL {calculatePrice(currency[1], 0.92)}</div>
			<OrderWindow orderType={orderType} currency={currency} active={active} closeOrderWindow={closeOrderWindow}></OrderWindow>
		</div>
	)
}