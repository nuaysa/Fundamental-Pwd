function majority(input: number[]){
    var n: number = input.length/2

    input = input.filter((item, idx, arr) => arr.filter(val => val == item).length > n)

    return input[0]
}

console.log(majority([3,2,3]));
console.log(majority([2,2,1,1,1,2,2]));

function majorityElement(input: number []){
    let count = 0;
    let baru = null
    for(let key of input){
        if(count == 0){
            baru = key
    }
    count += (key === baru) ? 1 : 0
    }
return baru
}
console.log(majorityElement([2,2,1,1,1,2,2]));

//

function mayoritas(input: number[]){
    input.sort
    return input[Math.floor(input.length/2)]
}

console.log(mayoritas([2,2,1,1,1,2,2]));