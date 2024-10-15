import TopHeader from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<>
			<div className="body">
				<TopHeader />

				    <main>{children}</main>

				<Footer />
			</div>
		</>
	)
}