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
		// centerMode: true,
		// centerPadding: '0',
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
						@LASTBONES
					</Link>
				</h2>
			</div>

			<Slider {...settings} className={styles.cards}>
				<CardCarrossel imgSrc="/images/carrossel/solo.png" />
				<CardCarrossel imgSrc="/images/carrossel/duo.png" />
				<CardCarrossel imgSrc="/images/carrossel/duo_rock.png" />
				<CardCarrossel imgSrc="/images/carrossel/baterista.png" />
			</Slider>
		</section>
	)
}

export default Carrossel