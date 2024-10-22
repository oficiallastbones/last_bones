import styles from "./Menu.module.css"
import Link from "next/link";
import SocialIcons from "@/components/atoms/SocialIcons/SocialIcons";

const Menu = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.menu}>
				<div className={styles.show}>
					{/* Deverá ser pego pela api */}
					<Link target='_blank' href="agenda">
						<p>PRÓXIMO SHOW - 23/06 - GUAÍRA</p>
					</Link>
				</div>



				<div className={styles.secoes}>
					<ul className={styles.list_secoes}>
						<li><Link href="produtos">PRODUTOS</Link></li>
						<li><Link href="agenda">AGENDA</Link></li>
						<li><Link href="videos">VÍDEOS</Link></li>
						<li><Link href="contato">CONTATO</Link></li>
					</ul>
					<SocialIcons className={styles.socials} />


				</div>
			</div>
		</nav>
	)
}

export default Menu;