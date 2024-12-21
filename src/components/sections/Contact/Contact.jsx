import { useState } from "react";
import styles from "./Contact.module.css";
import Title from "@/components/atoms/Title/Title";
import Chat from '@/components/atoms/ChatPopup/Chat';
import { URL_WHATS_GRUPO } from "@/constants";
import Link from "next/link";

const Contact = () => {
	const [formData, setFormData] = useState({
		nome: "",
		telefone: "",
		email: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch("URL_DA_API", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...formData,
					accessKey: "CHAVE_DE_ACESSO",
				}),
			});

			if (response.ok) {
				window.location.href = "URL_DE_REDIRECIONAMENTO"; // Substitua pela URL desejada
			} else {
				console.error("Erro ao enviar o formulário");
			}
		} catch (error) {
			console.error("Erro de conexão:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className={styles.contato}>
			<Title tag='contato'></Title>
			<div>
				<h2 className={styles.lastbones}>LEVE A LAST BONES ATÉ VOCÊ</h2>
			</div>

			<div>
				<h2 className={styles.contatonome}>Entre em contato:</h2>
			</div>

			<div>
				<form onSubmit={handleSubmit} className={styles.formulario}>
					<label htmlFor="nome" className={styles.formularionome}>
						Nome
					</label>
					<input
						id="nome"
						type="text"
						name="nome"
						placeholder="Digite seu nome"
						title="Digite seu nome"
						pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$"
						autoCapitalize="on"
						required
						className={styles.inputnome}
						value={formData.nome}
						onChange={handleChange}
					/>

					<label htmlFor="telefone" className={styles.formulariotelefone}>
						Telefone
					</label>
					<input
						id="telefone"
						type="tel"
						name="telefone"
						placeholder="(00) 00000-0000"
						// pattern="\(\d{2}\) \d{4,5}-\d{4}"
						pattern="\d{11}"
						title="Digite seu telefone"
						required
						className={styles.inputtelefone}
						value={formData.telefone}
						onChange={handleChange}
					/>

					<label htmlFor="email" className={styles.formularioemail}>
						Email
					</label>
					<input
						id="email"
						type="email"
						name="email"
						placeholder="example@example.com"
						title="Digite seu email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
						required
						className={styles.inputemail}
						value={formData.email}
						onChange={handleChange}
					/>

					<label htmlFor="message" className={styles.formulariomensagem}>
						Escreva sua mensagem
					</label>
					<textarea
						id="message"
						name="message"
						cols="30"
						rows="10"
						placeholder="Digite sua mensagem"
						title="Digite sua mensagem"
						required
						className={styles.inputmensagem}
						value={formData.message}
						onChange={handleChange}
					></textarea>

					<div>
						<button
							type="submit"
							className={styles.formulariobotao}
							disabled={isSubmitting}
						>
							{isSubmitting ? "Enviando..." : "Enviar mensagem"}
						</button>
					</div>
				</form>
			</div>

			<div className={styles.gallery}>
				<img
				src="/images/show/show_5.jpg"
				alt="Imagem 1"
				className={`${styles.image} ${styles.largeTall}`}
				/>
				<img
				src="/images/banda/paisagem/banda_1.jpg"
				alt="Imagem 2"
				className={`${styles.image} ${styles.square}`}
				/>
				<img
				src="/images/guitarrista/guitar_1.jpg"
				alt="Imagem 3"
				className={`${styles.image} ${styles.square}`}
				/>
				<img
				src="/images/banda/paisagem/banda_8.jpg"
				alt="Imagem 4"
				className={`${styles.image} ${styles.wide}`}
				/>
			</div>

			<hr className={styles.divider} />
			
			<div className={styles.clube}>
				<h2>SEJA PARTE DO CLUBE</h2>
				<p>Entre no nosso grupo do Whatsapp e seja avisado sobre os próximos shows da banda, participe de sorteios e tenha acesso a todo conteúdo extra da banda direto pelo seu celular</p>

			</div>

			<div className={styles.botao}>
					<button className={styles.popup} >
						<Link href={URL_WHATS_GRUPO}>
							<Chat />
						</Link>
					</button>
			</div>

		</section>
	);
};

export default Contact;
