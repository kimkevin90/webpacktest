import hello_word from "./hello.js";
import world_word from "./world.js";
import css from "./styles.css";

//css-loader는 css를 읽어와서 웹팩으로 가져옴
//style-loader는 가져온것을 웹페이지안에 주입시킴
document.querySelector("#root").innerHTML = hello_word + world_word + "어바웃";
