import styles from "./Menu.module.css"
import Link from "next/link";
import SocialIcons from "@/components/atoms/SocialIcons/SocialIcons";
// import Line from "@/components/atoms/Line/Line";

const Menu = ({ current_page }) => {
	const menu_pages = [
		{
			key: 'home',
			name: "HOME",
			link: "/",
		},
		{
			key: 'produtos',
			name: "PRODUTOS",
			link: "/produtos",
		},
		{
			key: 'agenda',
			name: "AGENDA",
			link: "/agenda",
		},
		{
			key: 'videos',
			name: "VÍDEOS",
			link: "/videos",
		},
		{
			key: 'contato',
			name: "CONTATO",
			link: "/contato",
		},
	];

	return (
		<>
			<nav className={`${styles.nav} ${(current_page === 'home') ? styles.home : ''}`}>
				<div className={styles.menu}>
					<div className={styles.show}>
						{/* Deverá ser pego pela api */}
						<Link href="agenda">
							<p>PRÓXIMO SHOW - 23/06 - GUAÍRA</p>
						</Link>
					</div>

					<div className={styles.secoes}>
						<ul className={styles.list_secoes}>
							{menu_pages.map((page) => {
								if (page.key !== current_page) {
									return (
										< li key={page.key} > <Link href={page.link}>{page.name}</Link></li>
									)
								}
							})}
						</ul>
						<SocialIcons className={styles.socials} />
					</div>
				</div>
			</nav >
			{/* {(current_page !== 'home') ? <Line /> : ''} */}
		</>
	)
}

export default Menu;