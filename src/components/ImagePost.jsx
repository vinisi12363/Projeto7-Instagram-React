import { useState } from "react"
export default function ImagePost(props) {
    console.log(props)
    const [heartLiked , setHeartLiked] = useState (false);
    const [bookSaved , setBookSaved] = useState (false);
    const [countLikes, setCountLikes] = useState (523);


    function toggleLike (like){
        setHeartLiked(like);
        like ? setCountLikes (Number(countLikes)+1) : setCountLikes(countLikes-1)  
    }
    function toggleBookSave (save){
        setBookSaved(save);
    }
    

    return (
        <>
            <div class="conteudo">
                <img src={props.src} alt={props.alt} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div className="innerAcoes" >
                        <ion-icon onClick={()=>toggleLike(!heartLiked)} className={heartLiked} name={heartLiked ? "heart" : "heart-outline"}
                        style={heartLiked ? {color:"#ed4957"} : {color:"black"}}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={()=>toggleBookSave(!bookSaved)} className={bookSaved} name={bookSaved ? "bookmark" : "bookmark-outline"}
                        style={bookSaved ? {color:"#262626"} : {color:"black"}}></ion-icon>

                    </div>
                </div>

                <div className="curtidas">
                    <img src="./assets/img/respondeai.svg" alt="respondeai" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.{countLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </>

    )

}