// function swapValue(input:any[]){
//     var res: {[key: string]: string}[] = []
    
//     var key1 = input.map((property) => Object.keys(property)).toString().split(",").join(" ")
//     var value1 = input.map((value) => Object.values(value)).toString().split(",").join(" ")
//     //console.log(key, value);
    
//     var obj: {[key: string]: string} = {};
//     obj[value1] = key1

// return obj
// }

// console.log(swapValue([{ name: "David", age: 20 }]));

// const obj = {a: "name", b: "age"}


//

function swapVal(input: any){
    const res: any ={}

    for(let key in input[0]) {
        res [input[0][key]] = key
    }

    return [res]
}

 console.log(swapVal([{ name: "David", age: 20 }]));