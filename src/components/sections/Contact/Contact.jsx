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
            <div>
                <h2>LEVE A LAST BONES ATÉ VOCÊ</h2>
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
                        pattern="\(\d{2}\) \d{4,5}-\d{4}"
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

        </section>
    );
};

export default Contact;
