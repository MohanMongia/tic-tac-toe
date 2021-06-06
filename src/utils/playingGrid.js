function checkIfGameIsPlayableButNoTurnPlayedYet (gameStatus) {
    if(gameStatus === 0)
        return true;
    return false;
}

function checkIfGameEnded (gameStatus) {
    if(gameStatus === -1)
        return true;
    return false;
}

function checkIfCellIsAlreadyMarked(gridValues,rowIndex,columnIndex) {
    if(gridValues[rowIndex][columnIndex]!==0)
        return true;
    return false;
}

function checkIfGridCellIsClickedPrecisely(e) {
    if(e.target.className === "PlayingGridCell")
        return true;
    return false;
}

function getAllGridCellSiblingsFromEventTarget(e) {
    return Array.from(e.target.parentElement.children);
}

function getIndexOfGridCellIn1DArray(e,siblings) {
    return siblings.findIndex(cell => {
        if(cell === e.target)
            return true;
        return false;
    });
}

function calculateRowIndexIn2DArray(indexIn1DArray) {
    return Math.floor(indexIn1DArray/3);
}

function calculateColumnIndexIn2DArray(indexIn1DArray) {
    return indexIn1DArray%3;
}

function calculateNewGridValues(gridValues,rowIndex,columnIndex,turn) {
    const newGridValues = [...gridValues];
    newGridValues[rowIndex][columnIndex] = turn;
    return newGridValues;
}

function swapTurn(turn,changeTurn) {
    if(turn === 1)
        changeTurn(-1);
    else
        changeTurn(1);
}



export default function whenPlayingGridCellisClicked(e,stateModifiers,stateValues) {
    let {
        gameStatus,
        turn,
        gridValues,
        moves
    } = stateValues;

    const {
        changeTurn,
        setGameStatus,
        changeGridValues,
        setMoves
    } = stateModifiers;

    if(checkIfGameEnded(gameStatus))
    {
        return;
    }

    if(checkIfGameIsPlayableButNoTurnPlayedYet(gameStatus))
    {
        changeTurn(1);
        turn=1;
        setGameStatus(1);
    }

    const siblings = [...getAllGridCellSiblingsFromEventTarget(e)];
    
    const gridValuesIndex = getIndexOfGridCellIn1DArray(e,siblings);
    
    const rowIndex = calculateRowIndexIn2DArray(gridValuesIndex);
    const columnIndex = calculateColumnIndexIn2DArray(gridValuesIndex);

    if(checkIfCellIsAlreadyMarked(gridValues,rowIndex,columnIndex))
    {
        return;
    }
    
    if(checkIfGridCellIsClickedPrecisely(e))
    {
        const newGridValues = calculateNewGridValues(gridValues,rowIndex,columnIndex,turn);

        setMoves(moves+1);

        swapTurn(turn,changeTurn);

        changeGridValues(newGridValues);
    }
}