import styles from './CardProdutos.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { URL_WHATS_VENDAS } from '@/constants'


const CardProdutos = ({ id, name, price, imgSrc }) => {
	return (
		<div className={styles.card}>
			<Link href={URL_WHATS_VENDAS} target='_blank'>
				<Image src={imgSrc} width="300" height="400" alt={name} href={URL_WHATS_VENDAS} />
			</Link>
			<div className={styles.desc}>
				<h2>{name}</h2>
				<h3>{price}</h3>
			</div>
		</div>
	)
}

export default CardProdutos