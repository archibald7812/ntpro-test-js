import { Clock } from "../../components/Clock/Clock"
import { useEffect, useState } from "react"
import classnames from "classnames"
import styles from './index.module.css'

export const TraidingPage = () => {

	const [time, setTime] = useState(new Date())

	useEffect(() => {
		setInterval(() => {
			setTime(new Date())
		}, 1000)
	}, [])

	return (
		<div className={classnames(styles.root)}>
			<Clock
				className={classnames(styles.section)}
				time={time}
			></Clock>

		</div>
	)
}