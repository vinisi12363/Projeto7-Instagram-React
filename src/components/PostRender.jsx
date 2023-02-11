
// fazer o use state pro like aqui KKKK

export default function PostRender(props) {
    
    return (
       
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.photoSRC} alt={props.name} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
        </div>

    )

}