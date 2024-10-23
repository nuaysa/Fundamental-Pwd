// /*
//     input ="seekor anjing dan babi bermain di taman"
//     output= "seekor a****g dan b**i bermain di taman"
// */

// function encrypt(input: string): string{
//     var splitted = input.split(" ")
    
//     if(splitted.includes("anjing")){
//         var anjing = splitted.indexOf("anjing")
//         splitted.splice(anjing,1,"a****g")
//     }
//     if(splitted.includes("babi")){
//         var babi = splitted.indexOf("babi")
//         splitted.splice(babi,1,"b**i")
//     }
//     if(splitted.includes("monyet")){
//         var monyet = splitted.indexOf("monyet")
//         splitted.splice(monyet,1,"m****t")
//     }
//     return splitted.join(" ")
// }
// console.log(encrypt("seekor anjing dan babi bermain di taman"));
// console.log(encrypt("monyet makan pisang"));

// //loop

// function sensor(input: string): string {
//     var splitted = input.split(" ")
//     var res =""

//     var filtered = splitted.map((item) =>{
//     if(item === "anjing") return "a****g";
//     if(item === "babi") return "b**i";
//     if(item === "monyet") return "m****t";
// })
//     res = filtered.join("")

// return res
// }

// console.log(sensor("seekor anjing dan babi bermain di taman"));
// console.log(sensor("monyet makan pisang"));

// //

// function sensor2( str: string) {
//     const kasar = ["anjing","babi", "monyet"]
//     const res: string[] = []

//     str.split(' ').forEach((item) => {
//         if (kasar.includes(item)){
//             const first = item.charAt(0)
//             const last = item.charAt(item.length -1)
//             const middle = "*".repeat(item.length)
            
//             res.push(first+ middle +last)
//         }else {
//             res.push(item)
//         }
//     })

//     return res.join(" ")
    
// }

// console.log(sensor2("seekor anjing dan babi bermain di taman"));
// console.log(sensor2("monyet makan pisang"));


function maxChar(str: string, n: number){
    var arr = str.split("")
    var res =""
        arr.splice(n, arr.length-n, "...")
        res= arr.join("")

    return res
}

console.log(maxChar("Purwadhika Bandung", 10));//

function maxChar2(str: string, n: number){
    if(str.length > n){
        return str.substring(0, n) + "..."
    }else{
        return str
    }
}

console.log(maxChar2("Purwadhika Bandung", 10));//

function phoneFormat(input: string){

    var splitted = input.split("")
    splitted.splice(0, 0, "(")
    splitted.splice(4, 0, "-")
    splitted.splice(4, 0, ")")
    splitted.splice(9, 0, "-")

    return splitted.join("")
}

console.log(phoneFormat("123456789"));

//

function phoneFormat2(input: string) {
    let res = "(xxx)-xxx-xxx"
    for (let i = 0; i < input.length; i++){
        res = res.replace("x", input.charAt(i))
    }

return res
}

console.log(phoneFormat2("123456789"));

//vocal 

function hitungVokal(input: string){
    var arr = input.toLowerCase().split("")
    var vocals = ["a","i","u","e","o"]  
    var res: any[] =[]  
    
    arr.forEach((item) =>{
                        if(vocals.includes(item)){
                        res.push(item)
                        }}
                    )

return res.length
}

console.log(hitungVokal("Purwadhika"));
console.log(hitungVokal("Bandung"));

function countVowel (str: string){
    const vowel = ["a"]
}
;
