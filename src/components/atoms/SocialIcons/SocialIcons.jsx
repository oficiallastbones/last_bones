import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa"
import { URL_INSTA, URL_WHATS, URL_YOUTUBE } from "@/constants"
import Link from "next/link"
import styles from "./SocialIcons.module.css"

const SocialIcons = ({ className = "" }) => {
	return (
		<ul className={`${styles.social_icons} ${className}`}>
			<li className={styles.instagram}><Link target='_blank' href={URL_INSTA}><FaInstagram /></Link></li>
			<li className={styles.zap}><Link target='_blank' href={URL_WHATS}><FaWhatsapp /></Link></li>
			<li className={styles.youtube}><Link target='_blank' href={URL_YOUTUBE}><FaYoutube /></Link></li>
		</ul>
	)
}

export default SocialIcons