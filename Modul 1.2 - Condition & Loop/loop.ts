for (var i = 0; i < 3; i++){
    if (i===3)continue //buat skip
    console.log("ngantuk");   
}

//while loop
let A: number = 1
while (true){
    console.log(`Hello ke-${A}`);
    if (A==10) break
    A++
}

//do while
do {
    console.log(`Hello ke=${i}`);
    i++
} while (i<=5)