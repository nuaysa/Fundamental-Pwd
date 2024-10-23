function find(input: number[]){
var res: number[]= []
    for(let i = 0; i < input.length; i++){
        if(input[i] == input[i + 1] && input[i] == input[i + 2]){
            res.splice(input[i], 1)
        }else if(input[i] == input[i + 1]){
            res.push(input[i])
        }
    }
    return res
}

console.log(find([1,2,2,2,3,3,4,5,5]))

function duplicate(input: number[]){
    const duplicated = input.filter((item, index) => input.indexOf(item) !== index)
    
    return duplicated
}

console.log(duplicate([1,2,2,2,3,3,4,5,5]))