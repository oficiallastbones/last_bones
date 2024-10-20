import Image from "next/image"
import Link from "next/link"
import styles from "./Footer.module.css"
import SocialIcons from "@/components/atoms/SocialIcons/SocialIcons"

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Image styles={styles.logo} src="/images/logo.png" width="100" height="100" desc="logo lastbones last bones"></Image>
			{/* FALTA TERMINAR */}
			<div className={styles.txt}>
				<p>@Copyright Last Bones - 2024</p>
				<p><Link target='_blank' href="https://fgvjr.com/">Powered by FGV Jr.</Link></p>
			</div>

			<div className={styles.socials}>
				<h3>Siga-nos</h3>
				<SocialIcons />
			</div>
		</footer >
	)
}

export default Footer