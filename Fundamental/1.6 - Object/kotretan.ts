function arrayStringsAreEqual(word1: string[], word2: string[]){
    var one: string = word1.join('').toString()
    var two: string = word2.join('').toString()
    
    if(one == two)
        return true
    else
        return false
    
};

console.log(arrayStringsAreEqual(["abc","c"],["a","bc"]));

function findWordsContaining(words: string[], x: string) {
    var res = []
    
    for(let i = 0; i < words.length; i++)
        if(words[i].includes(x))
            res.push(i)
        return res
};

console.log(findWordsContaining(["leet", "code"], "e"));


function getAge(me: string){
    let now: Date = new Date()
    let date =new Date(me)

    const gapInMs = now.getTime() - date.getTime()
    const age = Math.floor(gapInMs/ (1000* 60 * 60 * 24 * 356))

    return age
}

console.log(getAge("2006-07-29"));

function mostCommonWord(paragraph: string, banned: string[]): string {
    const words = paragraph.toLowerCase().match(/\w+/g) || [];

    const hitung: { [key: string]: number} = {};
  for (let kata of words) {
    if (!hitung[kata]) {
      hitung[kata] = 1;
    } else {
      hitung[kata]++;
    }
  }

    let BnykFreq = 0;
    let commonKata = ""

    for(let kata in hitung){
        if(hitung[kata] > BnykFreq && !banned.includes(kata)){
            BnykFreq = hitung[kata];
            commonKata = kata;
        }
    }

    return commonKata
}
;

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.",["ball", "hit"] ));

