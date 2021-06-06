export default function checkIfGameFinished(gridValues) {
    
    for(let i=0;i<3;i++)
    {
        let rowSum=0;let columnSum=0;
        for(let j=0;j<3;j++)
        {
            rowSum += gridValues[i][j];
            columnSum += gridValues[j][i];
        }
        if(rowSum === 3) // Player with X wins
        {
            return 1;
        }
        else if(rowSum === -3) // Player with O wins
        {
            return -1;
        }
        else if(columnSum === 3)
        {
            return 1;
        }
        else if(columnSum === -3)
        {
            return -1;
        }
    }

    let leftToRightDiagonal = gridValues[0][0]+gridValues[1][1]+gridValues[2][2];

    if(leftToRightDiagonal === 3)
    {
        return 1;
    }
    else if(leftToRightDiagonal === -3)
    {
        return -1;
    }

    let rightToLeftDiagonal = gridValues[0][2]+gridValues[1][1]+gridValues[2][0];

    if(rightToLeftDiagonal === 3)
    {
        return 1;
    }
    else if(rightToLeftDiagonal === -3)
    {
        return -1;
    }

    // If nothing matches
    return 0;
}