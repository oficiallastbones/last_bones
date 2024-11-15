import styles from './Produtos.module.css'
import CardProdutos from '@/components/atoms/Card/CardProdutos'
import Title from '@/components/atoms/Title/Title'


const Produtos = () => {
	return (
		<section>
			<Title tag="loja">LOJA OFICIAL DO LAST BONES</Title>

			<div className={styles.produtos}>
				<CardProdutos name="Boné" price="R$ 50,00" imgSrc="/images/produtos/bone1.jpeg" />
				<CardProdutos name="Boné" price="R$ 50,00" imgSrc="/images/produtos/bone2.jpeg" />
				<CardProdutos name="Camisa" price="R$ 50,00" imgSrc="/images/produtos/camisa1.jpeg" />
				<CardProdutos name="Camisa" price="R$ 50,00" imgSrc="/images/produtos/camisa2.jpeg" />
				<CardProdutos name="Camisa" price="R$ 50,00" imgSrc="/images/produtos/camisa3.jpeg" />
				<CardProdutos name="Camisa" price="R$ 50,00" imgSrc="/images/produtos/camisa4.jpeg" />
				<CardProdutos name="Camisa Longa" price="R$ 50,00" imgSrc="/images/produtos/camisaLonga1.jpeg" />
				<CardProdutos name="Canecas" price="R$ 50,00" imgSrc="/images/produtos/caneca1e2.jpeg" />
				<CardProdutos name="Caneca" price="R$ 50,00" imgSrc="/images/produtos/2.jpg" />
				<CardProdutos name="Moletom" price="R$ 50,00" imgSrc="/images/produtos/moletom1.jpeg" />
				<CardProdutos name="Moletom" price="R$ 50,00" imgSrc="/images/produtos/moletom2.jpeg" />
			</div>
		</section>
	)
}

export default Produtos