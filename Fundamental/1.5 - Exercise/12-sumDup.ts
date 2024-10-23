function sumDup(input: number[]) {
    const hashMap : {[key: number] : number } = {};
    var result = []

    for(var i = 0; i < input.length; i++){
        const currentNum = input[i]
        hashMap[currentNum] = (hashMap[currentNum] || 0) +1
    
    
    for(const key in hashMap){
        if(hashMap[key] > 1)
            
            result.push(key) 

    }
    }
    return result
}

console.log(sumDup([10, 20, 40, 10, 50, 30, 10, 60, 10]));


const hashMap : {[key: number] : number } = {};
var arr = [11,22,33,44,44,55]
for(var i = 0; i < arr.length; i++){
    const currentNum = arr[i]
    hashMap[currentNum] =(hashMap[currentNum] || 0) + 1; 
}
