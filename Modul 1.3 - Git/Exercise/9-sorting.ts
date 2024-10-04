let a: number = 42
let b: number = 27
let c: number = 18

if(a > b){
    [a , b] = [b, a] ;
}
if(a > c){
    [a, c] = [c, a]
}
if (b > c){
    [b, c] = [c, b]
}

console.log(a, b ,c);
