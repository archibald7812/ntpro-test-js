import { useEffect, useState } from "react"
export const Clock = ({ className }) => {


	const [time, setTime] = useState(new Date())

	useEffect(() => {
		setInterval(() => {
			setTime(new Date())
		}, 1000)
	}, [])

	return (
		<section className={className}>
			{time.toLocaleTimeString('ru-RU')}
		</section>
	)
}