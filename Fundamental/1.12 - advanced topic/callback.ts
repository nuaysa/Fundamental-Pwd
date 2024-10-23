function calculator(a: number, b: number, callback: (x: any) => void) {
    callback(a + b);
}
function displayer(something: any) {
    console.log(something);
}
function multiplyer(num: number){
    console.log(num*2);
    
}

calculator(10, 5, multiplyer);
//function yang  dikirim sebagai argumen kedalam function lain, dalam contoh ini adalah displayer

