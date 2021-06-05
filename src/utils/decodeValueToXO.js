export const decodeCellText = (value) => {
    if(value === 0)
    {
        return '-';
    }
    else if(value === 1)
        return 'X';
    else if(value === -1)
        return 'O';
}