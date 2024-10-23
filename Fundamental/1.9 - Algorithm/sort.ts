function sortArr(arr: number[]){
    arr = arr.sort((a, b) => b - a)
    var res: any[] = []
    // console.log(arr);

    for(var i = 0; i < arr.length/2; i++){
            res.push(arr[i])
            res.push(arr[arr.length -i -1])
    }

return res
}

console.log(sortArr([1,2,3,4,5,6]));

//

