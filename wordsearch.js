const wordSearch = (letters, word) => {
  const horizontalReverse = letters.map(el => el.reverse().join(''));
  const verticalReverse = transpose(letters).map(el => el.reverse().join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  for (let l of horizontalReverse) {
    if (l.includes(word)) return true;
  }
  for (let l of verticalReverse) {
    if (l.includes(word)) return true;
  }
  return false;
};

const transpose = function(matrix) {
  const newMatrix = [];
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (newMatrix[col]) {
        newMatrix[col].push(matrix[row][col]);
      } else {
        newMatrix.push([matrix[row][col]]);
      }
    }
  }
  return newMatrix;
};



module.exports = wordSearch;