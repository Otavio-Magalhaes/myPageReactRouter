import styles from "./rodape.module.css"
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg"


export default function rodape() {
    return(
        <footer className={styles.rodape}> 
            <MarcaRegistrada/>
            Desenvolvido por Otavio Magalhães
        </footer>
    )
}