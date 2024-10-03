var words:string ="hello world"
var words2 = words.replace(/\b\w/g, match => match.toUpperCase());

console.log(words2);

//

var res: string = ""
for (let i = 0 ; i < words.length ; i++) {
    if (i == 0 || words.charAt(i-1) == " "){
        res += words.charAt(i).toUpperCase()
    }else{
        res += words.charAt(i).toLowerCase()
    }
}

let isCapital: boolean = true

for (let i = 0 ; i < words.length ; i++) {
    if (i == 0 || words.charAt(i-1) == " "){
        res += words.charAt(i).toUpperCase()
    }else{
        res += words.charAt(i).toLowerCase()
    }
}
