import classnames from "classnames"
import styles from './index.module.css'

export const Header = () => {
	return (
		<div className={classnames(styles.root)}>
			<div className={classnames(styles.link)}>Trading</div>
			<div className={classnames(styles.link)}>Archive</div>
		</div>
	)
}