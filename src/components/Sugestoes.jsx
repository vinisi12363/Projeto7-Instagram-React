import SugestoesRender from "./SugestoesRender"
import sugestoes from "./sugestoes"

export default function Sugestoes() {
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {   sugestoes.map((sugestao)=>(
                <SugestoesRender key= {sugestao.nome} src={sugestao.src} name={sugestao.nome} />
            ))}
        </div>

    )

}