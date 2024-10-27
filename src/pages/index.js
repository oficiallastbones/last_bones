import Menu from "@/components/sections/Menu/Menu"
import Footer from "@/components/sections/Footer/Footer"
import Banner from "@/components/sections/Banner/Banner";
import About from "@/components/sections/About/About";
// import Desc2 from "@/components/sections/Desc2/Desc2";

export default function Home() {
	return (
		<>
			<Menu />
			<Banner />
			<About />
			{/* 	 */}
			<Footer />
		</>
	);
}