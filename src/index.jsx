//TODO PRIMEIRO SEPARAR AS CLASSES DO HTML EM JSX SEPARADAS 

//TODO LEMBARAR DE DAR OS COMMITS 

// TODO DEPOIS VERIFRICAR A CONSTRUÇÃO DE CADA CLASSE DO INSTRAGRAM 

//TODO LEMBARAR DE DAR OS COMMITS 

//TODO NÃO ESQUECER OS DATAS SETS VER NO NOTION 

//TODO LEMBARAR DE DAR OS COMMITS 

//TODO parei na criação do array de objetos post.

import ReactDOM from "react-dom";
import Corpo from "./components/Corpo";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";
import Sugestoes from "./components/Sugestoes";
import Usuario from "./components/Usuario";




function App() {
  return (
    <div class="app">
      <Navbar />
      <Corpo />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
