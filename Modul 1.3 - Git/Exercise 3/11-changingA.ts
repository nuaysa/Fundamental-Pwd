var input: string ="an apple a day keeps the doctor away"
var change: string ="a"

var output: string =""
for(var i = 0 ; i < input.length; i++){
    if(input[i] == change){
        output += input[i].replace("a","*")
    }else{
        output += input[i]
    }
}
console.log(output);
