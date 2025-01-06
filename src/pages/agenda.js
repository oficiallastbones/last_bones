import Menu from "@/components/sections/Menu/Menu"
import Agenda_ from "@/components/sections/Agenda/Agenda"
import Footer from "@/components/sections/Footer/Footer"

const Agenda = () => {
	return (
		<>
			<Menu current_page="agenda" />
			<Agenda_ />
			<Footer />
		</>
	)
}

export default Agenda