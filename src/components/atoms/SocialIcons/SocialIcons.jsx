import { FaInstagarm, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa"
import Link from "next/link"
import styles from "./SocialIcons.module.css"

const SocialIcons = ({ className = "" }) => {
	return (
		<ul className={`${styles.social_icons} ${className}`}>
			<li><Link target='_blank' href="https://www.instagram.com/officiallastbones/"><FaInstagram /></Link></li>
			<li><Link target='_blank' href="#"><FaWhatsapp /></Link></li>
			<li><Link target='_blank' href="https://www.youtube.com/@lastbones9293"><FaYoutube /></Link></li>
		</ul>
	)
}

export default SocialIcons