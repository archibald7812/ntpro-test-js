import { Clock } from "../../components/Clock/Clock"
import { useEffect, useState } from "react"
import classnames from "classnames"
import styles from './index.module.css'
import { Currencies } from "../../components/Currencies/Currencies"

export const TraidingPage = () => {

	const [time, setTime] = useState(new Date())

	useEffect(() => {
		setInterval(() => {
			setTime(new Date())
		}, 1000)
	}, [])

	return (
		<div className={classnames(styles.root)}>
			<section className={classnames(styles.card)}>
				<Clock
					className={classnames(styles.section)}
					time={time}
				></Clock>
				<Currencies
				></Currencies>
			</section>
		</div>
	)
}