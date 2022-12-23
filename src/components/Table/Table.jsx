import { useSelector } from "react-redux"
import styles from './index.module.css'
import classnames from "classnames"

export const Table = () => {

	const header = [
		{
			title: "Side"
		},
		{
			title: "Price"
		},
		{
			title: "Instrument"
		},
		{
			title: "Volume"
		},
		{
			title: "Timestamp"
		},
	]

	const orders = useSelector(state => state.orders.orders)

	return (
		<section className={classnames(styles.root)}>
			<table className={classnames(styles.table)}>
				<thead className={classnames(styles.tableHead)}>
					<tr className={classnames(styles.titleRow)}>
						{header.map((item, index) => {
							return <th key={index} className={classnames(styles.titleColumn)}>{item.title}</th>
						})}
					</tr>
				</thead>
				<tbody>
					{orders.map(order => {
						return <tr key={order.time}>{Object.values(order).map((column, index) => {
							return <td key={index} className={classnames(
								styles.orderColumn,
								index === 0 ? order.orderType === 'BUY' ? styles.buy : styles.sell : null
							)}>{column}</td>
						})}</tr>
					})}
				</tbody>
			</table>
		</section>
	)
}