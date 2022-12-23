import { Clock } from "../../components/Clock/Clock"
import classnames from "classnames"
import styles from './index.module.css'
import { Currencies } from "../../components/Currencies/Currencies"

export const TraidingPage = () => {

	return (
		<div className={classnames(styles.root)}>
			<section className={classnames(styles.card)}>
				<Clock
					className={classnames(styles.section)}
				></Clock>
				<Currencies />
			</section>
		</div>
	)
}