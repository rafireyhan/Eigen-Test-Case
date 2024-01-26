function matrixDiagonal(matrix){
  //Inisiasi variabel diagonal
  let diagonal_1 = 0;
  let diagonal_2 = 0;

  //Hitung jumlah diagonal pertama
  for (let i=0; i<matrix.length; i++){
    diagonal_1 += matrix[i][i];
  }

  //Hitung jumlah diagonal kedua
  for (let i=0; i<matrix.length; i++){
    diagonal_2 += matrix[i][matrix.length -1 -i];
  }

  //Pengurangan diagonal
  return (diagonal_1 - diagonal_2);
}

//Inisiasi matrix 3x3
const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

//Panggil function, print kedalam console
console.log("Hasil: " + matrixDiagonal(matrix));
