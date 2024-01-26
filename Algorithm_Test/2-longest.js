function longest(sentence){
  //Bersihkan kalimat dari non-alfabet
  const clean_sentence = sentence.replace(/[^a-zA-Z ]/g, '');

  //Split kalimat menjadi array per kata
  const word = clean_sentence.split(' ');

  //Temukan kata terpanjang
  let longest_word = "";
  for (let i = 0; i< word.length; i++){
    if (word[i].length > longest_word.length){
      longest_word = word[i];
    }
  }

  //Return kata terpanjang
  return longest_word;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const result = longest(sentence);
const result_length = longest(sentence).length;

console.log("Longest word: "+result+" : "+result_length+" character");