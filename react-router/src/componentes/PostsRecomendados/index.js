import PostCard from "componentes/PostCard"
import styles from "./PostsRecomendados.module.css"

export default function PostsRecomendados({posts, parametros}) {

    const postRecomendados = posts
    .filter((post) => 
        post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0,4)

    return(
        <>
            <h2 className={styles.tituloOutrosPosts}>Outros Posts que você possa gostar</h2>
                        <ul className={styles.postsRecomendados}>
                            {postRecomendados.map((post)=>(
                                <li key={post.id}>
                                    <PostCard post={post} key={post.id}/>
                                </li>
                            ))}
                        </ul>
        </>
    )
}