import { Link } from "react-router-dom"
import style from "./post.module.css"
import BotaoPrincipal from "componentes/BotaoPrincipal"



export default function PostCard({post}) {
    return (
        <Link to={`/posts/${post.id}`}>

        <div className={style.post}>
            <img 
                className={style.capa}
                src={`/assets/posts/${post.id}/capa.png`}
                alt="Imagem de Capa do post"
            />
            <h2 className={style.titulo}>
                {post.titulo}
            </h2>
            <BotaoPrincipal>
                Ler
            </BotaoPrincipal>

        </div>
        </Link>
    )
}

