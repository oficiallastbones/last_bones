import Menu from "@/components/sections/Menu/Menu"
import Agenda_ from "@/components/sections/Agenda/Agenda"
import JoinGroup from "@/components/sections/JoinGroup/JoinGroup"
import Footer from "@/components/sections/Footer/Footer"

const Agenda = () => {
	return (
		<>
			<Menu current_page="agenda" />
			<Agenda_ />
			{/* <JoinGroup /> */}
			<Footer />
		</>
	)
}

export default Agenda