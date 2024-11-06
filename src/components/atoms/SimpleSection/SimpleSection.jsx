import styles from "./SimpleSection.module.css"
import Image from "next/image"

const SimpleSection = ({ className = "", imageUrl, right = false, desc, children }) => {
	return (
		<div className={`${styles[`${right}`]}  ${styles.simpleSection} ${className}`}>
			<div className={styles.imgContainer}>
				<Image src={imageUrl} alt={desc} width='500' height='300' />
			</div>

			<div className={styles.text}>
				{children}
			</div>
		</div>
	)
}

export default SimpleSection
