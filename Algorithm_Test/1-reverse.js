function reverse(word) {
  //Pisahkan antara huru dan angka
  const huruf = word.replace(/\d/g, '');
  const angka = word.match(/\d+/);

  //Split huruf, reverse per-kata dan gabungkan kembali
  const reversed = huruf.split('').reverse().join('');

  //Gabung huruf dengan angka
  const result = reversed + (angka ? angka[0] : '');

  return result;
}

const word = "NEGIE1";
const reverse_alphabet = reverse(word);
console.log(reverse_alphabet);