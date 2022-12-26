import classnames from "classnames"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addOrder } from "../../store/orders/ordersSlice"
import styles from './index.module.css'

export const OrderWindow = ({ active, closeOrderWindow, currency, orderType, price }) => {

	const dispatch = useDispatch()

	const [actualPrice, setActualPrice] = useState(price)
	const [volume, setVolume] = useState('')
	const [disabled, setDisabled] = useState(true)

	useEffect(() => {
		setActualPrice(price)
	}, [price])

	if (!active) return null

	const onSave = (event) => {
		event.preventDefault()
		if (volume==='') return 
		dispatch(addOrder({
			orderType: orderType,
			price: actualPrice,
			instrument: currency[0],
			volume: volume,
			time: new Date().toLocaleString('ru-RU', {
				year: 'numeric',
				month: 'numeric',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				milliseconds: 'numeric',
				fractionalSecondDigits: 3
			})
		}))

		setVolume('')
	}

	const onChange = (event) => {
		event.preventDefault()
		setVolume(event.target.value)
		if (Number(event.target.value) && event.target.value.length) setDisabled(false)
		else setDisabled(true)
	}

	return (
		<div className={classnames(styles.root)}>
			<div className={classnames(styles.title)}>Make order</div>
			<div className={classnames(styles.body)}>
				<div className={classnames(styles.section, styles.info)}>
					<span
						className={classnames(orderType === 'BUY' ? styles.buy : styles.sell)}
					>{orderType}</span><span>{currency[0]} {actualPrice}</span>
				</div>
				<div className={classnames(styles.section, styles.volume)}>
					<span>Volume</span>
					<input type='text' value={volume} onChange={(e) => onChange(e)}></input>
				</div>
				<div className={classnames(styles.section, styles.buttons)}>
					<button onClick={() => {
						setVolume('')
						closeOrderWindow()
					}}
						className={classnames(styles.button)}>Cancel</button>
					<button onClick={(e) => {
						onSave(e)
						closeOrderWindow()
					}
					} disabled={disabled}
						className={classnames(styles.button)}>OK</button>
				</div>
			</div>
		</div>
	)
}