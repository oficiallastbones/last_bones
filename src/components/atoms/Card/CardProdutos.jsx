import styles from './CardProdutos.module.css'
import Image from 'next/image'
import Link from 'next/link'

const CardProdutos = ({ id, name, price, imgSrc }) => {
	return (
		<div className={styles.card}>
			<Image src={imgSrc} width="300" height="400" alt={name} />
			<div className={styles.desc}>
				<h2>{name}</h2>
				<h3>{price}</h3>
			</div>
		</div>
	)
}

export default CardProdutos