import styles from "./Thanks.module.css"
import Link from "next/link";

const Thanks = () => {
    return (
        <section className={styles.obrigado}>

            <div className={styles.descricao}>

                <h2 className={styles.texto1}>
                    MUITO OBRIGADO PELO CONTATO
                </h2>

                <h2 className={styles.texto2}>
                    Nossa equipe retornará em breve
                </h2>

            </div>

            <div className={styles.botao}>
                <Link href="\">
                    <h2>Página Principal</h2>
                </Link>
			</div>

        </section>

    )
}

export default Thanks;