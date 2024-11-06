import styles from './CardCarrossel.module.css'
import Image from 'next/image'

const CardCarrossel = ({ imgSrc, desc = "" }) => {
	return (
		<div className={styles.card}>
			<Image src={imgSrc} width="300" height="400" alt={desc} />
		</div>
	)
}

export default CardCarrossel