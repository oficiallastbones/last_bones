import styles from './Agenda.module.css'
import Title from '@/components/atoms/Title/Title'
import CardShow from '@/components/atoms/Card/CardShow'

const Agenda = () => {
	return (
		<section className={styles.agenda}>
			<Title tag="agenda de shows">Agenda de shows</Title>

			<CardShow date={new Date} title_desc="Last Bones (Tributo Grunge)" opening="19h" rua="Rua das Hortaliças 43" property="Salão de Eventos UGRF" location={[-22.908333, -43.196388]} />
			<CardShow date={new Date} title_desc="Last Bones (Tributo Grunge)" opening="19h" rua="Rua das Hortaliças 43" property="Salão de Eventos UGRF" location={[-22.908333, -43.196388]} />
		</section>
	)
}

export default Agenda