const str: string = "An apple a day keeps the doctor away"
const res: string = str.replace(/a/gi, "*")
//gi = global insensitive untuk mendapat semua a 

console.log(res);
//

const letters: string = "Hello@ Students Purwa4dhika"
console.log(letters.replace(/[^a-zA-Z\s]/g,""));//selain alfabet dihilangkan
console.log(letters.replace(/[a-zA-Z\s]/g,""));//karakternya yg ilang


//
var words: string ="an apple a day keeps the doctor away"
