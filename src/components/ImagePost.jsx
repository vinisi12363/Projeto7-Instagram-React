
export default function ImagePost(props) {
    console.log("ImagePost", props)

    return (
        <>
       
            <div class="conteudo">
                <img src={props.src} alt={props.alt} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div className="innerAcoes" >
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src="./assets/img/respondeai.svg" alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </>


    )




}