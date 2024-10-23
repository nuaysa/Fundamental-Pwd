
var n:number = 5

let divider : number = 0
for (let i = 1; i <= n ; i++) {
        if (n % i === 0) {
         divider++
        }
    }

console.log(divider == 2 ? "Prime Number" : "Not a Prime Number");

//ternary
console.log(
    n % 2 == 0 || n % 3 == 0 || n % 5 ==0 || n % 7 == 0 ?
    "prime number" : "Not a Prime number"
);

