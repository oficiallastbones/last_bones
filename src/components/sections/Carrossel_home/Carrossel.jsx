import CardCarrossel from '@/components/atoms/Card/CardCarrossel'
import { URL_INSTA } from '@/constants'
import Slider from "react-slick"
import Link from 'next/link'
import styles from './Carrossel.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carrossel = () => {
	const settings = {
		dots: true, // Exibe os pontos de navegação
		arrows: false,
		infinite: true, // Carrossel contínuo
		speed: 2000, // Velocidade da transição
		slidesToShow: 4, // Quantidade de slides visíveis ao mesmo tempo
		slidesToScroll: 1, // Quantidade de slides que se movem por vez
		autoplay: true, // Ativa a rotação automática
		autoplaySpeed: 3000, // Velocidade de rotação automático
		responsive: [
			{
				breakpoint: 1180,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 850,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				},
			},
		]
	};

	return (
		<section className={styles.carrossel}>
			<div className={styles.title}>
				<h1>LAST GRAN</h1>
				<h2>
					<Link href={URL_INSTA} target='_blank'>
						@officiallastbones
					</Link>
				</h2>
			</div>

			<Slider {...settings} className={styles.cards}>
				<CardCarrossel imgSrc="/images/show/show_13.jpg" />
				<CardCarrossel imgSrc="/images/guitarrista/guitar_7.jpg" />
				<CardCarrossel imgSrc="/images/show/show_2.jpg" />
				<CardCarrossel imgSrc="/images/guitarrista/guitar_9.jpg" />
				<CardCarrossel imgSrc="/images/baterista/bat_5.jpg" />
				<CardCarrossel imgSrc="/images/guitarrista/guitar_5.jpg" />
				<CardCarrossel imgSrc="/images/show/show_3.jpg" />
				<CardCarrossel imgSrc="/images/baterista/bat_3.jpg" />
				<CardCarrossel imgSrc="/images/guitarrista/guitar_3.jpg" />
				<CardCarrossel imgSrc="/images/banda/retrato/banda_7.jpg" />
				<CardCarrossel imgSrc="/images/baterista/bat_7.jpg" />
				<CardCarrossel imgSrc="/images/show/show_4.jpg" />
				<CardCarrossel imgSrc="/images/guitarrista/guitar_1.jpg" />
			</Slider>
		</section>
	)
}

export default Carrossel