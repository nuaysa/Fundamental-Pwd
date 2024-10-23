function find(arr1: number[], arr2: number[]){
    const dup = arr1.filter((item, index) => arr2.includes(item));
    
return dup
}

console.log(find([1,2,3,4,5,],[3,4,5,6]));

function different(arr1 : number [], arr2:number[]){
    const hashMap : {[key: number] : number} ={};
    const newarr = arr1.push(...arr2)
    var result = []

    for(let i = 0 ; i < arr1.length ; i++){
        const currentNum =arr1[i];
        hashMap[currentNum] =(hashMap[currentNum] || 0) + 1; 
    }
    for(const key in hashMap)
        if(hashMap[key] === 1)
            result.push(Number(key));
            return result
}

console.log(different ([1,2,3,4],[3,4,5,6]));
