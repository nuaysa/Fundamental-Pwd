interface Icar {
    brand : string
    model : string
    price? : number
}
//Isi dari object adalah key dan value
const car: Icar = {
    brand : 'BMW',
    model : 'M135i xDrive',
    price : 800000000
}
//harus ada semua propertynya, kalau mau dibikin opsional, tambahin ? setelah nama propertynya
//bisa juga bikin pake keyword type, pake samadengan
//kalo yang interface gausah pake samadengan sama koma
//interface bisa di mods dan 
//kalo bikin obbject pake interface aja

type book = {
    title: string,
    writer: string,
    genre: string
}

const book = {
    title: "crinme and punishment",
    writer: "Fyodor Dostoyevsky",
    genre: "idk"
}

interface Iuser {
    name: string
    hobby?: string
    adress?: {
        street: string
        country: string
    }
    greeting(name: string): void //tidak mereturn apa apa
}

const user: Iuser = {
    name: "Aydut",
    adress: {
        street: "rancaekek",
        country: "Indonesia"
    },
    greeting(name: string) {
        console.log("Hello" +" "+name);   //namanya method, bukan function lgi
    }
}

// console.log(user.name);//cara pertama, pake dot(.)
// console.log(user['name']);//cara kedua, pake square bracket['']

// user.greeting(user.name)

user.hobby = 'baca buku'//harus udah ada di interface
delete user.hobby

// console.log(user.adress?.street);

console.log(Object.keys(user));//buat dapetin keysnya

//looping object
//kalau array for..of, kalau object for..in

for (let key in user) {
    console.log(user);
}//manggil key dari object

for (let key in user) {
    console.log(user[key as keyof typeof user]);
}//manggil valuenya, mastiin dlu apakah keynya merupakan bagian dari object

