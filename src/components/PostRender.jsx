import { useState } from "react"
export default function PostRender(props) {
    console.log("PostREnder props", props);
    const [heartLiked, setHeartLiked] = useState(false);
    const [bookSaved, setBookSaved] = useState(false);
    const [countLikes, setCountLikes] = useState(523);


    function toggleLike(like) {
        setHeartLiked(like);
        like ? setCountLikes(Number(countLikes) + 1) : setCountLikes(countLikes - 1)
    }
    function togglePostLike(postLike) {
        if (postLike){
            setHeartLiked(postLike);
            postLike ? setCountLikes(Number(countLikes) + 1) : setCountLikes(countLikes - 1)
        }
        
    }
    function toggleBookSave(save) {
        setBookSaved(save);
    }

    return (

        <div  data-test="post" class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImgSRC} />
                    {props.name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img data-test="post-image" src={props.photoSRC} alt={props.photoAlt} onClick={() => togglePostLike(!heartLiked)}
                    style={heartLiked ? { color: "#ed4957" } : { color: "black" }} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div className="innerAcoes" >
                        <ion-icon data-test="like-post" onClick={() => toggleLike(!heartLiked)} className={heartLiked} name={heartLiked ? "heart" : "heart-outline"}
                            style={heartLiked ? { color: "#ed4957" } : { color: "black" }}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon data-test="save-post" onClick={() => toggleBookSave(!bookSaved)} className={bookSaved} name={bookSaved ? "bookmark" : "bookmark-outline"}
                            style={bookSaved ? { color: "#262626" } : { color: "black" }}></ion-icon>

                    </div>
                </div>

                <div className="curtidas">
                    <img src="./assets/img/respondeai.svg" alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong data-test="likes-number">outras 101.{countLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>

    )

}