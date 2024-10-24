import styles from "./SimpleSection.module.css"
import Image from "next/image"

const SimpleSection = ({ className = "", text, imageUrl}) => {
	return (
        <div className={`${styles.simplesection} ${className}`}>
            <div className={styles.text}>
                <p>{text}</p>
            </div>

            <div className={styles.image}>
                <Image src={imageUrl} alt='desc' width='100' height='100'></Image>
            </div>
        </div>
	)
}

export default SimpleSection
