import styles from "./botaoPrincipal.module.css"

export default function BotaoPrincipal({ children, tamanho}) {
    return (
            <button className={`
                ${styles.botaoPrincipal}
                ${styles[tamanho]}
            `}>
                {children}
            </button>

    )

} 