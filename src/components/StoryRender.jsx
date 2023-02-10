export default function StoryRender(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.photoSRC} alt={props.name} />
            </div>
            <div class="usuario">
                {props.name}
            </div>
        </div>
    )
}
