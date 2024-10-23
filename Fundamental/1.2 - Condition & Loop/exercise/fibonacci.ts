// const n: number = 1

// let result: number = 1
// for (let i = n; i >= 0; i++){
//     result += i
// }

// console.log(result);

//cara 2
const x :number = 15 
let a: number = 0
let b: number = 1

for (let i= 1; i < x ; i++){
    let nextNumber = a + b
    a = b
    b = nextNumber
}

console.log(b);
