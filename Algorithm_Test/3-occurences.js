function occurrences(input, query){
  //Variabel untuk menyimpan jumlah kemunculan
  const occur =  {};

  //Hitung kemunculan dalam INPUT 
  for (const word of input){
    occur[word] = (occur[word] || 0) + 1;
  }

  //Hitung jumlah kemunculan dalam QUERY
  const result = query.map(word => occur[word] || 0);

  return result;
}

const INPUT = ['xc', 'dz', 'bbb', 13, '13'];
const QUERY = ['bbb', 'ac', 13];

const output = occurrences(INPUT, QUERY);
console.log("Output = ["+output+"]");