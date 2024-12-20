import Image from "next/image"
import Link from "next/link"
import styles from "./Footer.module.css"
import SocialIcons from "@/components/atoms/SocialIcons/SocialIcons"

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Image styles={styles.logo} src="/images/logo.png" width="100" height="100" alt="logo lastbones last bones"></Image>
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