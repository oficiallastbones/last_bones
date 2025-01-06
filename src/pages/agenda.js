import Menu from "@/components/sections/Menu/Menu"
import Agenda_ from "@/components/sections/Agenda/Agenda"
import Footer from "@/components/sections/Footer/Footer"
import JoinGroup from "@/components/sections/JoinGroup/JoinGroup"

export async function getStaticProps() {
	try {

		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
		const response = await fetch(`${baseUrl}/api/agenda`)
		const database_ = await response.json()

		return {
			props: {
				agenda: database_,
			},
			revalidate: 60, // Atualiza a página a cada 60 segundos
		}
	} catch (error) {
		console.error("Error fetching products:", error)
		return {
			props: {
				agenda: [],
			},
		}
	}
}

const Agenda = ({ agenda }) => {
	return (
		<>
			<Menu current_page="agenda" />
			<Agenda_ agenda={agenda} />
			<JoinGroup />
			<Footer />
		</>
	)
}

export default Agenda