import Menu from "@/components/sections/Menu/Menu"
import Footer from "@/components/sections/Footer/Footer"
import Banner from "@/components/sections/Banner/Banner";
import About from "@/components/sections/About/About";
import JoinGroup from "@/components/sections/JoinGroup/JoinGroup";

export default function Home() {
	return (
		<>
			<Menu current_page="home" />
			<Banner />
			<About />
			<JoinGroup />
			<Footer />
		</>
	);
}