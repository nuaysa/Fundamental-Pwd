const arr = [1, 2, 3]
const arr2 = [1, 2, 3]

console.log(arr === arr2);
//object dan array tidak bisa dibandingkan walau isinya sama, karena reference (mengacu pada satu data) kecuali referensinya sama
//object yang non-primitive yang gabisa dibandingin

const target = {a: 1, b : 2}
const source ={b: 4, c: 5}
const final = Object.assign(target, source)

Object.assign(target, "hi")

console.log(target);
//numpuk source ke target, bisa juga dipake add

const n =[1,2,3]

n[n.length] = 4
console.log(n);

const obj1 = {a : 1}
const obj2 = {a : 1}
const nyatu = Object.assign(obj1, obj2)

console.log(nyatu);
