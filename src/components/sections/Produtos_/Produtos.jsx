import styles from './Produtos.module.css'
import CardProdutos from '@/components/atoms/Card/CardProdutos'
import Title from '@/components/atoms/Title/Title'

const Produtos = ({ produtos }) => {
	return (
		<section>
			<Title tag="loja">LOJA OFICIAL DO LAST BONES</Title>

			<div className={styles.produtos}>
				{produtos.length > 0 ? (
					produtos.map((produto) => (
						<CardProdutos id={produto.id} key={produto.id} name={produto.name} price={produto.price} desc={produto.description} imgSrc={produto.img} />
					))
				) : (
					<p>Nenhum produto encontrado com este status.</p>
				)}
			</div>
		</section>
	)
}

export default Produtos