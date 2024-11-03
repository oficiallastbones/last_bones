import styles from "./Banner.module.css"
import Image from "next/image"

const Banner = () => {
	return (
		<Image className={styles.img} src="/images/banda/paisagem/banda_8.jpg" width="1600" height="1080" alt="Banda Last Bones" />
	)
}

export default Banner