
import Usuario from "./Usuario"
import Sugestoes from "./Sugestoes"

export default function Sidebar() {
  const defaultUser="catanacomics"
  return (
        <div class="sidebar">
        
        <Usuario name={defaultUser}/>
        <Sugestoes/>
      
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>


    )

}