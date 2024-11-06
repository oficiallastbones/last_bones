import Menu from "@/components/sections/Menu/Menu";
import Videos from "../components/sections/Videos/Videos";
import Footer from "@/components/sections/Footer/Footer";

export default function VideosPage() {
	return <>
		<Menu current_page="videos" />
		<Videos />
		<Footer />
	</>;
}
