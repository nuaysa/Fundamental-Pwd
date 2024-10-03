var input: string ="The QuiCk BrOwN FOX"

var result: string =""
for (let i = 0; i < input.length; i++) {
    if(input[i] == input[i].toUpperCase()){
        result += input[i].toLowerCase()
    } else {
        result += input[i].toUpperCase()
    }
}

console.log(result);
