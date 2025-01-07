import styles from './CardShow.module.css';
import 'leaflet/dist/leaflet.css';

const CardShow = ({ date, title, opening, description, property, location }) => {

	const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
	const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

	const dia = date.getDate();
	const diaSemana = diasDaSemana[date.getDay()];
	const mes = meses[date.getMonth()];
	const ano = date.getFullYear();

	const urlMaps = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10000!2d${location.long || 0}!3d${location.lat || 0}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!${location.id || ''}!2s${location.place || ''}!5e1!3m2!1sen!2sbr!4v1736128566487!5m2!1sen!2sbr`
	return (
		<div className={styles.card}>
			<div className={styles.date}>
				<h1 className={styles.dia}>{dia}</h1>
				<h3 className={styles.mes}> {mes}</h3>
				<h2 className={styles.ano}>{ano}</h2>
			</div>
			<div className={styles.desc}>
				<h1>{title}</h1>
				<span></span>
				<p>{diaSemana}, {dia} de {mes}</p>
				<p>Início do Show: {opening}</p>
				<span></span>
				<p>{description}</p>
				<p>{property}</p>
			</div>
			<div className={styles.location_map}>
				{/* Div onde o mapa será renderizado */}
				<div className={styles.map}>
					<iframe src={urlMaps}></iframe>
				</div>
			</div>
		</div>
	);
};

export default CardShow;