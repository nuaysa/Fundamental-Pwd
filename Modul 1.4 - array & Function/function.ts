//function declaration (lebih flexible)
function reverseStr(input: string){
    return input.split('').reverse().join('')
}

console.log(reverseStr("shoose"));
 

//function expression
const sum = function(a: number, b:number, ...others: number[]){
   // console.log(others);//scoped
   const sumOther = others.reduce((a, b) => a + b) //kalau pake ini parameter othernya harus ada, klo g, error
    return a + b//harus berada paling bawah
}

console.log(sum(10, 5, 4, 6));

//function scope = variable didalam function tidak bisa di panggil diluar function(semua jenis variable)
//argument adalah parameter ketika function dipanggil
//default parameter akan diambil jika argumentnya tidak terpenuhi, tapi jika argumentnya terpenuhi,yang akan diambil adalah argument yang diisi
//kalau gaada returnnya, function tidak bisa disimpan didalam variable

function log(a: number){
    console.log("abc");
}

log(23)

//Nested Function = function dalam function

function getMessage (firstName: string){
    function sayHello () {
        return "Hello " + firstName
    }

    function welcomeMessage () {
        return "Welcome to Purwadhika"
    }

    return sayHello() + ", " + welcomeMessage()
}

console.log(getMessage("Aysa"));

//Closure function= mereturn sebuah function dengan parameter dari function luarnya

function greetings (name: string) {
    const defaultMsg: string ="Hello"
    return function(){
        return defaultMsg + name
    }
}

const greetingName = greetings("Aysa")
console.log(greetingName());

console.log(greetings ('Aysa')());

function capitalize (str: string) {
    let res: string =''
    for(let i = 0 ; i <= str.length ; i++){
        if(i == 0 || str.charAt(i-1) == " "){
            res += str.charAt(i).toUpperCase()
        } else {
        res += str.charAt(i).toLowerCase()
    }
    return res
    }
}

console.log(capitalize("hello purwadhika"));

//currying = mentranslate function dari (a,b,c) jadi (a)(b)(c)
function multiplier(factor: number) {
    return function(num: number){
        return factor*num
    }
}

const mul3 = multiplier(3)
console.log(mul3(4));
console.log(mul3(5));
console.log(multiplier(10)(2));

//rekursif = fuction yang memanggil dirinya sendiri

function countDown(fromNumber: number) {
    console.log(fromNumber);

    let nextNumber: number = fromNumber -1
    
    if (nextNumber > 0) {
        countDown(nextNumber)
    }
}

countDown(20)

//Arrow Function = cara alternatif(ternarynya function)

const square = (a: number, b: number) => a*b
console.log(square(4,4)); //punya limit, ada beberapa method yg gabisa digunakan


//parseInt mengubah string ke integer dengan radix yg ditentukan
console.log(parseInt("1011",2)); //biner
console.log(parseInt("123",8));  //oktal = 1*8^2 + 2*8^1 + 1*8^0
