function findMaxVal(arrInput: number[]){
    arrInput.sort((a, b) => a-b)

    return arrInput[arrInput.length -1]
    }

    console.log(findMaxVal([10, 55, 79, 32]));
    
