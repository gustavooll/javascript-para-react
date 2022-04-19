import "./style.css"
import CardGame from "../../components/CardGame";

function boardGame(how_many_cards){

    let $htmlContent = CardGame().repeat(how_many_cards);
    // for (let i = 0; i < 6; i++) {
    //     $htmlBoardGame += CardGame();
    // }
    
    return `
    <section class="board-game">
    ${$htmlContent}
    </section>`;
}

export default boardGame;