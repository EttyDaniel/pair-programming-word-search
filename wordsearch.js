const wordSearch = (letters, word) => { 
    //searching words horizontally
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    //transpose the letters
    const lettersTranspose = transpose(letters)
    const verticalJoin = lettersTranspose.map(ls => ls.join(''));

    //searching words in the transposed letters horizontally
    for (v of verticalJoin) {
        if (v.includes(word)) return true;
    }
    //if not found horizontally or vertically return false
    return false;  
}


//transposes the letters array 
const transpose = function (letters) {
  return letters[0].map((x,colIndex) => letters.map(row => row[colIndex]));
}


module.exports = wordSearch