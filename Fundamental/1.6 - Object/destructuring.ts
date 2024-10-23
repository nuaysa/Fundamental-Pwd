const person = {
    name: "Senra",
    age: 33,
    hobby: "sing"
}
//object destructuring, buat ngilangin person. ketika mau ngambil valuenya
//kalau misalnya udah ada variable dengan nama yang sama dengan property dalam object, nama property dalam object bisa diubah dengan (:) jadi kayak {name: str}, panggilnya str aja
const{ name, age, hobby } = person

console.log(name);
console.log(age);
console.log(hobby);

//destructuring array(harus berurutan karena mengacu ke index)

const arr = [1,2,3]
const[a, b, c] = arr

console.log(a);
// console.log(b);
console.log(c);

const user = {
    fisrtName : "Allys",
    Lastname : "Naveeda",
    greet(){
        console.log(`Hello, ${this.fisrtName} !`);
        //this-nya mengacu pada user   
    }
}

console.log(Object.entries(user));//diubah jadi array
Object.freeze(user)//biar gabisa diedit
console.log(user.hasOwnProperty("name"));//includesnya object
console.log(Object.values(user));


