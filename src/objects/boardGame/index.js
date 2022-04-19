import CardGame from "../../components/CardGame";

function boardGame(how_many_cards){

    let $htmlBoardGame = CardGame().repeat(how_many_cards);
    // for (let i = 0; i < 6; i++) {
    //     $htmlBoardGame += CardGame();
    // }
    
    return $htmlBoardGame;
}

export default boardGame;