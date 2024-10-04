var input: string ="katak"
var rev = input.split("").reverse().join("")

var output: string =""

if( input === rev){
    console.log(`${input} adalah palindrome`)
}else{
    console.log(`${input} bukan palindrome`);
}