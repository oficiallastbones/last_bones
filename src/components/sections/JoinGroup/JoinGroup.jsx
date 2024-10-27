import styles from './JoinGroup.module.css'
import Link from 'next/link'
import Container from '@/components/atoms/Container/Container'
import SimpleSection from '@/components/atoms/SimpleSection/SimpleSection'
import Carrossel from '../Carrossel/Carrossel'

const JoinGroup = () => {
	return (
		<section className={styles.join_group} >
			<Container>
				<SimpleSection className={styles.img_desc} imageUrl="/images/banda/10.png" desc="Pessoas no show da Last Bones">
					<h2>ENTRE NO NOSSO GRUPO!</h2>
					<p>Junte-se ao grupo Last Bones no WhatsApp! Lá você acompanha novidades sobre shows, lançamentos e produtos oficiais da banda. Conecte-se com outros fãs e faça parte dessa comunidade apaixonada pelo rock!</p>
				</SimpleSection>
				<Carrossel />

				<div className={styles.entre_contato}>
					<h3>Que tal trazer a Last Bones para seu estabelecimento? </h3>
					<button><Link href="/contato">Entre em contato!</Link></button>
				</div>
			</Container>
		</section >
	)
}

export default JoinGroup