import styles from './Title.module.css'

const Title = ({ tag, children }) => {
	return (
		<>
			<hr className={styles.line}></hr>
			<div className={styles.title}>
				<h3>LAST BONES<span> / {tag}</span></h3>
				<h1>{children}</h1>
			</div>
		</>
	)
}

export default Title