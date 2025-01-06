import Menu from "@/components/sections/Menu/Menu"
import Produtos_ from "@/components/sections/Produtos/Produtos"
import JoinGroup from "@/components/sections/JoinGroup/JoinGroup"
import Footer from "@/components/sections/Footer/Footer"

const Produtos = () => {
	return (
		<>
			<Menu current_page="produtos" />
			<Produtos_ />
			<JoinGroup />
			<Footer />
		</>
	)
}

export default Produtos