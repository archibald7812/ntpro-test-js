export const Clock = ({ time, className }) => {

	return (
		<section className={className}>
			{time.toLocaleTimeString('ru-RU')}
		</section>
	)
}