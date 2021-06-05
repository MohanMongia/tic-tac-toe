export default function checkIGameFinished(gridValues) {
    for(let i=0;i<3;i++)
        {
            let count=0;let count1=0;
            for(let j=0;j<3;j++)
            {
                count+=gridValues[i][j];
                count1+=gridValues[j][i];
            }
            if(count === 3)
            {
                return 1;
            }
            else if(count === -3)
            {
                return -1;
            }
            else if(count1 === 3)
            {
                return 1;
            }
            else if(count1 === -3)
            {
                return -1;
            }
        }
        let diagonal1 = gridValues[0][0]+gridValues[1][1]+gridValues[2][2];
        if(diagonal1 === 3)
        {
            return 1;
        }
        else if(diagonal1 === -3)
        {
            return -1;
        }
        let diagonal2 = gridValues[0][2]+gridValues[1][1]+gridValues[2][0];
        if(diagonal2 === 3)
        {
            return 1;
        }
        else if(diagonal2 === -3)
        {
            return -1;
        }
        return 0;
}