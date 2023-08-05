import styles from "./Banner.module.css"
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minhaFoto.jpeg"


export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Mundao ta ai
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoa! Eu sou o Otavio Magalhães, Software Engineer Inter e estutande de Sistemas de informação. Aqui Compartilho vários conhecimentos adquiridos durante a minha formação.
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt=""
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Otavio Magalhaes segurando um notebook no coloco"
                    ar
                />
            </div>
        </div>
    )
}