/*
    input = "Pig latin is cool"
    output = "igPay atinlay siay oolcay"
    huruf pertama pindah kebelakang, tambah ay
*/

function challenge(input: string){

    return input.split(" ").map((item) => item.slice(1) + item.charAt(0) + "ay").join(' ') 
}

console.log(challenge('Pig latin is cool'));
;

function lengthOfLastWord(s: string) {
    var splitted: string [] = s.split(" ")
    var terakhir = splitted[splitted.length-1]
    if(terakhir !== " "){
        return terakhir.length
    }if(typeof terakhir !== 'string'){
        for(var i = splitted.length; i > 0; i--)
        if(typeof splitted[i] == 'string')
        return splitted[i].length
    }

};

console.log(lengthOfLastWord("Hello World  "))