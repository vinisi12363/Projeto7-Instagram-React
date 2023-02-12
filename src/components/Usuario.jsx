/*
-  O projeto também deverá ter alguns dados dinâmicos que irão mudar na tela. São eles:
    -   Nome de usuário (ao apertar o lápis, aparece um `prompt` para alterá-lo). Se for passada uma string vazia, não atualiza.
   
    -  Imagem de perfil (ao clicar uma vez na imagem, aparece um `prompt` pedindo novo link). Se for passada uma string vazia, não atualiza.
   
    -  Salvar o post (ao clicar no ícone de salvar o post, ele deverá ficar preenchido).
 
    - Caso a postagem já esteja salva, ao clicar no ícone, a postagem deve passar para não salva.
    -   *Like* no post:
  
  
    - Ao clicar no ícone do *like* o usuário poderá curtir a postagem.  Ou seja, o ícone de coração deverá ficar preenchido e vermelho.
            - Caso a postagem já esteja curtida, ao clicar no ícone, a postagem deve passar para não curtida.
            - Ao clicar na imagem de um post do *feed*, o usuário poderá curtir a postagem, ou seja, o botão do *like* deverá ficar preenchido em vermelho.
 
        - OBS: assim como no Instagram de verdade, clicar na imagem **NÃO** retira *likes*, apenas adiciona caso já não tenha.

        - Sobre a frase de “Curtido por *fulano* e outras **xxx** pessoas”:
            - O número de *likes* deverá aumentar quando a pessoa der um *like* e diminuir quando retirá-lo.
            - O início da frase “Curtido por *fulano*” pode ter qualquer valor no lugar de *fulano*, não precisa ser o nome do usuário logado nem mudar quando o post for curtido.



*/
import { useState } from "react";
export default function Usuario(props){
    let userName="";
    let imageSRC="";
    const [name, setName] = useState(props.name)

    const [imgSRC, setImgSRC] = useState ("./assets/img/catanacomics.svg")

    function alterarNome (){
        userName=prompt("digite o nome de usuario");
        if (userName ==="" || userName=== null || userName.length === 0)
            alterarNome();
        else{
            setName(userName);   
        }    
    }

    function alterarFoto (){
      imageSRC=prompt("digite o caminho da imagem");
      if (imageSRC ==="" || imageSRC=== null || imageSRC.length === 0)
          alterarNome();
      else{
          setImgSRC(imageSRC);
      } 
    }
   
   return (
        
         <div class="usuario">
           <img onClick = {()=>alterarFoto()} src={imgSRC} alt="imagem de perfil"/>
           <div class="texto">
             <span>
               <strong>{name}</strong>
               <ion-icon onClick= {()=>alterarNome()} name="pencil"></ion-icon>
             </span>
           </div>
         </div>
        
   )
}