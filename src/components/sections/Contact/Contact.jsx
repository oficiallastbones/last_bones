import { useState } from "react";
import styles from "./Contact.module.css";

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
                // Substitua "URL_DE_REDIRECIONAMENTO" pela URL desejada
                window.location.href = "URL_DE_REDIRECIONAMENTO";
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
            <h2 className={styles.contatonome}>Entre em contato</h2>
            <form onSubmit={handleSubmit} className={styles.formulario}>
                <label htmlFor="nome" className={styles.formularionome}>
                    Nome
                </label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome"
                    autoComplete="on"
                    autoCorrect="on"
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
                    pattern="\(\d{2}\) \d{4,5}-\d{4}"
                    title="Formato esperado: (99) 99999-9999"
                    autoComplete="on"
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
                    placeholder="Digite seu email"
                    autoComplete="on"
                    required
                    className={styles.inputemail}
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="message" className={styles.formulariomensagem}>
                    Mensagem
                </label>
                <textarea
                    id="message"
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Digite sua mensagem"
                    required
                    className={styles.inputmensagem}
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <button
                    type="submit"
                    className={styles.formulariobotao}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </button>
            </form>
        </section>
    );
};

export default Contact;
