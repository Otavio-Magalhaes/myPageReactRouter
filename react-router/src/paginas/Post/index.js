import "./post.css"

import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import NotFound from "paginas/NotFound"
import PaginaPadrao from "componentes/PaginaPadrao"
import PostsRecomendados from "componentes/PostsRecomendados"


export default function Post() {
    const parametros = useParams()
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if (!post) {
        return <NotFound />
    }

    
    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao/>}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo} >

                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                        <PostsRecomendados posts={posts} parametros={parametros}/>
                    </PostModelo>
                }>
                </Route>
            </Route>
        </Routes>

    )
}