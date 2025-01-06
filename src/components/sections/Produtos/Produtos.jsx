import styles from './Produtos.module.css'
import CardProdutos from '@/components/atoms/Card/CardProdutos'
import Title from '@/components/atoms/Title/Title'

<<<<<<< HEAD:src/components/sections/Produtos/Produtos.jsx
const Produtos = () => {
=======
const Produtos = ({ produtos }) => {
>>>>>>> 886542e2b0547d9f7c956f38f7c7e6c6a8af324c:src/components/sections/Produtos_/Produtos.jsx
	return (
		<section>
			<Title tag="loja">LOJA OFICIAL DO LAST BONES</Title>

			<div className={styles.produtos}>
				{produtos.length > 0 ? (
					produtos.map((produto) => (
						<CardProdutos id={produto.id} key={produto.id} name={produto.name} price={produto.price} desc={produto.description} imgSrc={produto.img} />
					))
				) : (
					<p>Nenhum produto disponível encontrado.</p>
				)}
			</div>
		</section>
	)
}

export default Produtos