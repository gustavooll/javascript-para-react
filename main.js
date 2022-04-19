import "./src/styles/settings/colors.css"
import "./src/styles/generic/reset.css"
import "./src/styles/elements/base.css"
import boardGame from "./src/objects/boardGame"
import PlayerName  from "./src/components/PlayerName";

const $root = document.querySelector("#root");

const $htmlPlayerName1 = PlayerName("Zuko");
const $htmlPlayerName2 = PlayerName("Dazaranha");

let $htmlBoardGame = boardGame(6);


$root.insertAdjacentHTML('afterbegin',$htmlPlayerName1);
$root.insertAdjacentHTML('afterbegin',$htmlPlayerName2);
$root.insertAdjacentHTML('beforeend',$htmlBoardGame);

