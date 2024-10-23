let name: string = "Andi"

let newName: string = name

name = "Budi"

console.log(name);
//mutable jika salah satunya diubah akan berubah keduanya (array dan object)

const arr: number[] = [1,2,3]
const newArr: number[] =arr //copy value(spread operator)/ ...

arr.push(4)

// console.log(arr);
// console.log(newArr);

const person = {
    name: "Andi",
    age: 25
}

const newPerson ={...person, height: 165}

newPerson.name = "Wataru"

console.log(person);
console.log(newPerson)

//mutable mengacu pada 1 data yang sama, jika mau diubah menjadi immutable, maka gunakan [...arr] untuk array, dan {...object} untuk object
//kalau array, yang diganti arr-nya, kalo object yang diganti newobjectnya

