import classnames from "classnames"
import { Link } from "react-router-dom"
import styles from './index.module.css'

export const Header = () => {
	return (
		<div className={classnames(styles.root)}>
			<Link to={'/'} className={classnames(styles.link)}><div>Trading</div></Link>
			<Link to={'/archive'} className={classnames(styles.link)}><div >Archive</div></Link>
		</div>
	)
}