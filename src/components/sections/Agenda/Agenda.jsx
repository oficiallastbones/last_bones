import styles from './Agenda.module.css'
import Title from '@/components/atoms/Title/Title'
import CardShow from '@/components/atoms/Card/CardShow'

const Agenda = ({ agenda }) => {
	return (
		<section className={styles.agenda}>
			<Title tag="agenda de shows">Agenda de shows</Title>

			{agenda.length > 0
				? (
					agenda.map((show) => (
						<CardShow
							key={show.id}
							date={new Date(show.date)}
							title_desc={show.name}
							opening={`${new Date(show.date).getHours().toString().padStart(2, '0')}:${new Date(show.date).getMinutes().toString().padStart(2, '0')}`}
							rua={show.description}
							property="Salão de Eventos UGRF"
							location={show.maps}
						/>
					))
				) : (
					<p>Nenhum show encontrado.</p>
				)}
		</section>
	)
}

export default Agenda