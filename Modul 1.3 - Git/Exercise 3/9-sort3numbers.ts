const numbers = [42, 18, 27];
numbers.sort((a, b) => a - b);
console.log(numbers); 

var a: number = 48
var b: number = 27
var c: number = 18

if (a > b){
    [a, b] = [b, a]
} if (a > c){
    [a, c] = [c, a]
} if (b > c){
    [b, c] =[c, b]
}

console.log(a, b, c);
