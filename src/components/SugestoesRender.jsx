export default function SugestoesRender(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.src} alt={props.name} />
                <div class="texto">
                    <div className="nome">{props.name}</div>
                    <div className="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>  
        </div>

        


    )

}