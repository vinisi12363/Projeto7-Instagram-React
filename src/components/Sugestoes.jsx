import SugestoesRender from "./SugestoesRender"
import sugestoes from "./sugestoes"

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {   sugestoes.map((sugestao)=>(
                <SugestoesRender src={sugestao.src} name={sugestao.nome} />
            ))}
        </div>

    )

}