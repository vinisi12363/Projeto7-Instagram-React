export default function SugestoesRender(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.src} alt={props.name} />
                <div class="texto">
                    <div class="nome">{props.name}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>  
        </div>

        


    )

}