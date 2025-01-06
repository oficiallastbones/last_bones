import Image from "next/image"
import Link from "next/link"
import styles from "./Footer.module.css"
import SocialIcons from "@/components/atoms/SocialIcons/SocialIcons"

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Link href="\">
				<Image styles={styles.logo} src="/images/logo_white.png" width="120" height="120" alt="logo lastbones last bones"></Image>
			</Link>

			<div className={styles.txt}>
				<p>@Copyright Last Bones - 2024</p>
				<p className={styles.Jr}><Link target='_blank' href="https://fgvjr.com/"><span>Powered by FGV Jr.</span></Link></p>
			</div>

			<div className={styles.socials}>
				<h3>Siga-nos</h3>
				<SocialIcons />
			</div>
		</footer >
	)
}

export default Footer