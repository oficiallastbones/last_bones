import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <section className={styles.contato}>
            <h2>Entre em contato</h2>
            <form action="COLOCAR A API" method="post">
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    placeholder="Digite seu nome"
                    autoComplete="on"
                    autoCorrect="on"
                    autoCapitalize="on"
                    required
                />
                <label htmlFor="telefone">Telefone</label>
                <input
                    id="telefone"
                    type="tel"
                    name="telefone"
                    placeholder="Digite seu telefone"
                    autoComplete="on"
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                    autoComplete="on"
                    required
                />
                <label htmlFor="message">Mensagem</label>
                <textarea
                    id="message"
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Digite sua mensagem"
                    required
                ></textarea>
                <button type="submit">Enviar mensagem</button>

                <input type="hidden" name="accessKey" value="CHAVE DE ACESSO" />
                <input type="hidden" name="redirectTo" value="ONDE REDIRECIONAR" />
            </form>
        </section>
    );
};

export default Contact;
