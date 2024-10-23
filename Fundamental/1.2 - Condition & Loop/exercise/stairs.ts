
var n: number = 5
// // var x: string ="*"

// // for (var i = 0; i <= n; i++){
// //     console.log(x.repeat(i));
// // }

// // for (var i = n; i >= 1; i--){
// //     console.log(x.repeat(i));
// // }
// // //
// for (let i = 1; i <= n; i++) {
//     let res: string = ""//ke bawah
//     for (let j = 1; j <= i; j++)//ke samping
//         res += "*"
//     console.log(res);
//  }
// //
// // for (var i = n; i >= 1; i--){
// //    for (var j = 1; j <= i; j++)
// //    console.log("*".repeat(j));
// //  }

// for (let i = 1; i <= n; i++) {
//    let res: string = "*"//ke bawah
//    for (let j = 1; j <= i; j++)//ke samping
//        res += "*"
//    console.log(res);
// }
// //
var tinggi: number = 5
   for (let i= 1; i <= tinggi; i++){
      const spaces = ' '.repeat(tinggi - i);
      const stars = '*'.repeat(i);
      console.log(spaces + stars);
      
   }



   for (let i = tinggi; i >= 1; i--) {
       const spaces = ' '.repeat(tinggi - i);
       const stars = '*'.repeat(i);
       console.log(spaces + stars);
   }

for(let i = 1; i <= n; i++){
console.log(" ".repeat(n-i) + " *".repeat(i));
}