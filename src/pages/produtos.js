import Menu from "@/components/sections/Menu/Menu"
import Produtos_ from "@/components/sections/Produtos/Produtos"
import JoinGroup from "@/components/sections/JoinGroup/JoinGroup"
import Footer from "@/components/sections/Footer/Footer"

export async function getStaticProps() {
	try {

		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
		const response = await fetch(`${baseUrl}/api/products`)
		console.log(`PRODUTOS: ${baseUrl}/api/products`)
		const database_ = await response.json()

		return {
			props: {
				products: database_,
			},
			revalidate: 60, // Atualiza a página a cada 60 segundos
		}
	} catch (error) {
		console.error("Error fetching products:", error)
		return {
			props: {
				products: [],
			},
		}
	}
}

const Produtos = ({ products }) => {
	return (
		<>
			<Menu current_page="produtos" />
			<Produtos_ produtos={products} />
			<JoinGroup />
			<Footer />
		</>
	)
}

export default Produtos