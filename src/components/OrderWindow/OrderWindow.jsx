import classnames from "classnames"
import styles from './index.module.css'

export const OrderWindow = ({ active, closeOrderWindow, currency, orderType }) => {

	if (!active) return null

	return (
		<div className={classnames(styles.root)}>
			<div className={classnames(styles.title)}>Make order</div>
			<div className={classnames(styles.body)}>
				<div className={classnames(styles.section)}>
					{orderType} {currency[0]} {currency[1]}
				</div>
				<div className={classnames(styles.section)}>
					Volume
					<input></input>
				</div>
				<div className={classnames(styles.section)}>
					<button onClick={closeOrderWindow}>Cancel</button>
					<button>OK</button>
				</div>
			</div>
		</div>
	)
}