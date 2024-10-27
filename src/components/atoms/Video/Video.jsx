import styles from "./Video.module.css"

const Video = () => {
	return (
		<div className={styles.container}>
			<div className={styles.videoWrapper}>
				<iframe className={styles.video}
					title="Kiss From a Rose - Seal"
					src="https://www.youtube.com/embed/pN7cGMoyK4w"
					width={500}
					height={300}
					frameBorder="0"
					allowFullScreen
				/>
			</div>
		</div>
	)
}

export default Video