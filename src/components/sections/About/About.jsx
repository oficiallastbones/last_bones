import Container from "@/components/atoms/Container/Container"
import SimpleSection from "@/components/atoms/SimpleSection/SimpleSection"
import Video from "@/components/atoms/Video/Video"
import styles from "./About.module.css"

const About = () => {
	return (
		<Container>
			<SimpleSection imageUrl="/images/banda/1.png" desc="Show da banda LastBones">
				<p>Last Bones é uma banda de rock carioca que homenageia os clássicos do Grunge e Post-Grunge dos anos 90 e 2000. Formada por músicos apaixonados, a banda se destaca pelas performances enérgicas e autênticas, que conectam o público a cada riff. Nos palcos do Rio de Janeiro e além, Last Bones se compromete a entregar uma experiência intensa, cheia de nostalgia e vibração.</p>
			</SimpleSection>
			<SimpleSection right imageUrl="/images/banda/2.png" desc="">
				<p>Com raízes no coração do Rio de Janeiro, Last Bones traz para o palco a essência crua do Grunge e Post-Grunge, revivendo um dos maiores movimentos do rock. A banda é conhecida por seus shows potentes e envolventes, com uma energia que atrai tanto fãs antigos quanto novos. Inspirados por ícones do rock, eles reinventam o som dos anos 90, mantendo viva a paixão pelo gênero e criando uma conexão única com cada plateia.</p>
			</SimpleSection>
			<Video></Video>
		</Container>
	)
}

export default About