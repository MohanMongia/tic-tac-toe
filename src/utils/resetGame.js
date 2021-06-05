function checkIfGameAlreadyReset(gameStatus) {
    if(gameStatus === 0)
        return true;
    return false;
}

export default function whenResetButtonClicked(setGameStatus,setWinner,setTurn,setGridValues,gameStatus) {
    
    if(checkIfGameAlreadyReset(gameStatus))
    {
        return;
    }
    setGameStatus(0);
    setWinner(0);
    setTurn(0);
    setGridValues([[0,0,0],[0,0,0],[0,0,0]]);
}