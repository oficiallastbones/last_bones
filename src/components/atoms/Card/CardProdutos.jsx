import styles from './CardProdutos.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { URL_WHATS_VENDAS } from '@/constants'


const CardProdutos = ({ id, name, price, desc, imgSrc }) => {
	const formattedPrice = isNaN(price) ? price : "R$ " + parseFloat(price).toFixed(2).replace('.', ',')
	const mensagem = `Olá! Gostaria de saber mais sobre o produto *${name}* com descrição: *${desc}*. O valor é *R$ ${formattedPrice}*. Poderia me ajudar com a compra?`

	return (
		<Link href={`${URL_WHATS_VENDAS}?text=${mensagem}`} rel="noopener noreferrer">
			<div className={styles.card}>
				<Image src={imgSrc.url} width="300" height="400" alt={imgSrc.name} />
				<div className={styles.desc}>
					<h2>{name}</h2>
					<h3>{formattedPrice}</h3>
				</div>
			</div>
		</Link>
	)
}

export default CardProdutos