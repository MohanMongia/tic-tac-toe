function checkIfGameAlreadyReset(gameStatus) {
    if(gameStatus === 0)
        return true;
    return false;
}

export default function whenResetButtonClicked(setGameStatus,setWinner,setGridValues,setMoves,gameStatus) {
    
    if(checkIfGameAlreadyReset(gameStatus))
    {
        return;
    }
    setGameStatus(0);
    setWinner(0);
    setMoves(0);
    setGridValues([[0,0,0],[0,0,0],[0,0,0]]);
}