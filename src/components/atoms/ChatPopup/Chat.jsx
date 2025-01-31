import styles from './Chat.module.css'
import DoubleCheckIcon from '/public/icons/double_check'
import Image from 'next/image'

const Chat = ({ className = "" }) => {
	return (
		<div className={`${styles.popup} ${className}`}>
			<div className={styles.right}>
				<Image src="/images/logos/logo_white.png" width="60" height="60" alt="desc" />
				<div className={styles.text}>
					<h2>Last Bones</h2>
					<p>
						<DoubleCheckIcon color="#ffffff" />
						<span>Converse agora!</span>
					</p>
				</div>
			</div>
			<span>Just now</span>
		</div>
	)
}

export default Chat