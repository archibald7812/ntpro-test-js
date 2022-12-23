import { Table } from "../../components/Table/Table"
import classnames from "classnames"
import styles from './index.module.css'

export const ArchivePage = () => {
	return (
		<div className={classnames(styles.root)}>
			<Table />
		</div>
	)
}