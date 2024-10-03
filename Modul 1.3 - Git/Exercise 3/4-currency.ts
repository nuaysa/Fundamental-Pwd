var num:number = 1000

console.log(`Rp.${num.toLocaleString()},00`)

//

console.log(num.toLocaleString("id-ID",{style: 'currency', currency : "IDR"}));

//

var numStr: string = num.toString()
let count: number = 0

let res: string = ""

for(let i = numStr.length - 1; i >= 0; i--){
    if(count % 3 == 0 && count > 0){
        res= "." + res
    }
    res = numStr.charAt(i) + res
    count++
}

console.log(`Rp.${res},00`);
