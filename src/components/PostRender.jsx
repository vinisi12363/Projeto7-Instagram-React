export default function PostRender(props) {
    console.log ("foto src : ",props.photoSRC)
    return (
       
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.photoSRC} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
        </div>

    )

}