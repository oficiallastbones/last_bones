import Menu from "@/components/sections/Menu/Menu"
import Agenda_ from "@/components/sections/Agenda/Agenda"
import JoinGroup from "@/components/sections/JoinGroup/JoinGroup"
import Footer from "@/components/sections/Footer/Footer"

export async function getServerSideProps() {
	try {
		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
		const response = await fetch(`${baseUrl}/api/agenda`)
		const database_ = await response.json()

		return {
			props: {
				agenda: database_,
			},
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