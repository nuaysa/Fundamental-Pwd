var input: string = "madam"
var first= input.toLocaleLowerCase;
var reverse = input.split("").reverse().join("");

if (input == reverse){
    console.log(`${input} is a palindrome`);
}else{
    console.log(`${input} is a not palindrome`);
}

//
var str: string = 'katak'
var reverseInp: string =""

for (let i = str.length; i >= 0; i--){
    reverseInp += str.charAt(i)
}
// console.log(reverseInp);

console.log(str == reverseInp ? "Palindrome" : "Not a palindrome");
