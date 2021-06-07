export default function updateStates(result,scores,moves,setWinner,setScores,setGameStatus,setMoves){
    if(result === 1)
    {
        setWinner(1);
        const newScores = [...scores];
        newScores[0]++;
        setScores(newScores);
        setGameStatus(-1);
        setMoves(0);
    }
    else if(result === -1)
    {
        setWinner(-1);
        const newScores = [...scores];
        newScores[1]++;
        setScores(newScores);
        setGameStatus(-1);
        setMoves(0);
    }
    else
    {
        if(moves===9)
        {
            setWinner(0);
            setGameStatus(-1);
            setMoves(0);
        }
    }
}