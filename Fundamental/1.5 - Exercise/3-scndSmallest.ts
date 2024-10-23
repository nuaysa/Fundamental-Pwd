function secondSmll(input: number[]){
    var sorted = input.sort((a, b) => a-b )
    var res = sorted[1]

    return res
}

console.log(secondSmll([5,3,1,7,2,6]));

//

function secSmall(arr:number[]){
    arr.sort()
    const newArr = arr.filter((item) => item > arr[0])
    
    return newArr
}

console.log(secSmall([5,3,1,7,2,6]));