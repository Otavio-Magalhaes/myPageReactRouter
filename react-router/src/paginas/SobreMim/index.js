import PostModelo from "componentes/PostModelo"
import styles from "./SobreMim.module.css"
import fotoCapa from "assets/sobre_mim_capa.png"
import minhaFoto from "assets/ubbe.jpeg"

export default function SobreMim() {
   return (
      <PostModelo
         fotoCapa={fotoCapa}
         titulo="Sobre Mim"
      >
         <h3 className={styles.subtitulo}> Olá eu sou o Otavio</h3>
         <img 
            src={minhaFoto} 
            alt="Foto do Otavio segurando o notebok sentaado" 
            className={styles.fotoSobreMim}
         />
         
      </PostModelo>
   )
}