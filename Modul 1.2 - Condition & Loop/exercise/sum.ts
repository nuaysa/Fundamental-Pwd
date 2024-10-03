var n: number = 5 

var result = 0
var desc: string = ""
for (var i = 1; i<= n; i++){   
    result += i
    if (i==1){
        desc += "1"
    }else{
        desc += ` + ${i}`
    }
}

console.log(result);
console.log(`${desc} = ${result}`);
