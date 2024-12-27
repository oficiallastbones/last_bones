import styles from './JoinGroup.module.css'
import Link from 'next/link'
import Container from '@/components/atoms/Container/Container'
import SimpleSection from '@/components/atoms/SimpleSection/SimpleSection'
import Chat from '@/components/atoms/ChatPopup/Chat'
import Carrossel from '../Carrossel_home/Carrossel'
import { FaWhatsapp } from "react-icons/fa"
import { URL_WHATS } from "@/constants"

const JoinGroup = () => {
	return (
		<section className={styles.join_group} >
			<Container>
				<SimpleSection className={styles.img_desc} imageUrl="/images/show/show_6.jpg" desc="Pessoas no show da Last Bones">
					<h2>ENTRE NO NOSSO GRUPO!</h2>
					<p>Junte-se ao grupo Last Bones no WhatsApp! Lá você acompanha novidades sobre shows, lançamentos e produtos oficiais da banda. Conecte-se com outros fãs e faça parte dessa comunidade apaixonada pelo rock!</p>
				</SimpleSection>
				<button className={styles.popup} >
					<Link href={URL_WHATS}>
						<Chat /></Link>
				</button>

				<Carrossel />

				<div className={styles.entre_contato}>
					<h3>Que tal trazer a Last Bones para seu evento? </h3>
					<button><Link target="_blanck" href={URL_WHATS}><span>Entre em contato!</span> <FaWhatsapp /></Link></button>
				</div>
			</Container>
		</section >
	)
}

export default JoinGroup