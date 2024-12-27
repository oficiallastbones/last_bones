import { useEffect, useRef } from 'react';
import styles from './CardShow.module.css';
import 'leaflet/dist/leaflet.css';

const CardShow = ({ date, title_desc, opening, rua, property, location }) => {
	const mapRef = useRef(null); // Referência para o elemento do mapa
	const mapContainerRef = useRef(null); // Referência para o contêiner do mapa

	useEffect(() => {
		const L = require('leaflet');

		// Remove a instância do mapa se já estiver inicializada
		if (mapRef.current) {
			mapRef.current.remove();
		}

		const customIcon = L.icon({
			iconUrl: '/images/logo_black.png',
			iconSize: [20, 20],
			iconAnchor: [20, 40],
			popupAnchor: [0, -40], 
		});

		// Inicializa o mapa e o armazena na referência
		mapRef.current = L.map(mapContainerRef.current, {
			center: location || [-23.55052, -46.633308], // Coordenadas padrão ou passadas via props
			zoom: 13,
		});

		// Adiciona os tiles do OpenStreetMap
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors',
		}).addTo(mapRef.current);

		// Adiciona um marcador na localização especificada
		L.marker(location || [-23.55052, -46.633308], {icon: customIcon})
			.addTo(mapRef.current)
			.bindPopup('LastBones estará aqui')
			.openPopup();

	}, [location]); // Recria o mapa apenas se `location` mudar

	const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
	const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

	const dia = date.getDate();
	const diaSemana = diasDaSemana[date.getDay()];
	const mes = meses[date.getMonth()];
	const ano = date.getFullYear();

	return (
		<div className={styles.card}>
			<div className={styles.date}>
				<h1 className={styles.dia}>{dia}</h1>
				<h3 className={styles.mes}> {mes}</h3>
				<h2 className={styles.ano}>{ano}</h2>
			</div>
			<div className={styles.desc}>
				<h1>{title_desc}</h1>
				<span></span>
				<p>{diaSemana}, {dia} de {mes}</p>
				<p>Abertura da casa: {opening}</p>
				<span></span>
				<p>{rua}</p>
				<p>{property}</p>
			</div>
			<div className={styles.location_map}>
				{/* Div onde o mapa será renderizado */}
				<div ref={mapContainerRef} className={styles.map}></div>
			</div>
		</div>
	);
};

export default CardShow;