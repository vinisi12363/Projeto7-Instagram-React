export default function StoryRender(props) {
    
    return (
        <div class="story">
            <div className="imagem">
                <img src={props.photoSRC} alt={props.name} />
            </div>
            <div className="usuario">
                {props.name}
            </div>
        </div>
    )
}
