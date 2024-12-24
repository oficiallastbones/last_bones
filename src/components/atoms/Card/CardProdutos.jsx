import styles from './CardProdutos.module.css'
import Image from 'next/image'
import Link from 'next/link'

const CardProdutos = ({ id, name, price, desc, imgSrc }) => {
	return (
		<Link href={`https://wa.me/5521975566900?text=${desc}`}>
			<div className={styles.card}>
				<Image src={imgSrc} width="300" height="400" alt={name} />
				<div className={styles.desc}>
					<h2>{name}</h2>
					<h3>{price}</h3>
				</div>
			</div>
		</Link>
	)
}

export default CardProdutos