import Menu from "@/components/sections/Menu/Menu"
import Footer from "@/components/sections/Footer/Footer"
import Banner from "@/components/sections/Banner/Banner";
// import Desc1 from "@/components/sections/Desc1/Desc1";
// import Desc2 from "@/components/sections/Desc2/Desc2";

export default function Home() {
	return (
		<>
			<Menu />
			<Banner />
			{/* <Desc1 />
			<Desc2 /> */}
			<Footer />
		</>
	);
}
