var age: number = 21

if (age >= 17){
    console.log(`You can now create an ID card`);
} else {
    console.log(`You are not old enough to create an ID Card`); 
}

let grade: string = "B"

if (grade == "A"){
    console.log("Excellent result")
} else if (grade == "B") {
    console.log("Great result");
} else if(grade == "C") {
    console.log("Average result");
} else {
    console.log("invalid result");   
}

//switch
const date: Date = new Date ("1989-08-09")
const day: number = date.getDay()

switch (day) {
    case 0:
        console.log ("Minggu")
        break
    case 1:
        console.log ("Senin")
        break
    case 2:
        console.log ("Selasa")
        break
    case 3:
        console.log ("Rabu")
        break
    case 4:
        console.log ("Kamis")
        break
    case 5:
        console.log ("Jum'at")
        break
    case 6:
        console.log ("Sabtu")
        break
    default:
        console.log("invalid Day");
}

//operators

const x: number =6
const y: number =3

console.log(x < 10 && y > 5); //keduanya harus memenuhi kondisi agar jadi true
console.log(x > 10 || y < 6);//cukup salah satuunya true
console.log(!(x==6));

// Ternary
let str: string = "typescript"

console.log(str=="Typescript" ? "Typescript" : "Not a Typescript");

//Short-Circuiting
const value: string =""

const resultAnd: string = value && "Purwadhika" //munculin yang false dlu, kalau gaada baru munculin stringnya
const resultOr: string = value || "Purwadhika" // kebalikan yang and

console.log(resultAnd);
console.log(resultOr);

