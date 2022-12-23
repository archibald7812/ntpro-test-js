import classnames from "classnames"
import { useEffect, useState } from "react"
import { OrderWindow } from "../OrderWindow/OrderWindow"
import styles from './index.module.css'
export const ExchangeRate = ({ currency, className }) => {

	const [active, setActive] = useState(false)
	const [orderType, setOrderType] = useState('BUY')
	const [sellPrice, setSellPrice] = useState(0)
	const [buyPrice, setBuyPrice] = useState(0)

	useEffect(() => {
		setSellPrice(calculatePrice(currency[1], 1.02))
		setBuyPrice(calculatePrice(currency[1], 0.98))
	}, [currency])

	const calculatePrice = (price, factor) => {
		return (price * factor).toFixed(2)
	}

	const openOrderWindow = (event) => {
		const type = event.target.innerHTML.split(' ')[0]
		setOrderType(type || 'BUY')
		setActive(true)
	}

	const closeOrderWindow = () => {
		setActive(false)
	}

	return (
		<div className={classnames(styles.root, className)}>
			<div className={classnames(styles.buy, styles.price)} onClick={openOrderWindow}>BUY {buyPrice}</div>
			<div className={classnames(styles.sell, styles.price)} onClick={openOrderWindow}>SELL {sellPrice}</div>
			<OrderWindow price={orderType === 'BUY' ? buyPrice : sellPrice} orderType={orderType} currency={currency} active={active} closeOrderWindow={closeOrderWindow}></OrderWindow>
		</div>
	)
}