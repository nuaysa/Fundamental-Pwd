// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

//sort dlu
function lowHighAv(input: number []){
    input.sort((a, b)=> a-b)
        var bnykData: number = input.length 
        var jmlData: number = 0 // bisa pake reduce((a,b)=>a+b)

        for(let i = 0 ; i < input.length ; i++){
            jmlData += input[i]
        };

    var average =  jmlData / bnykData
    let res = `Lowest = ${input[0]}, Average =${average.toFixed(4)}, Highest = ${input[input.length-1]}` 
    
    return res
}

console.log(lowHighAv([12, 5, 23, 18, 4, 45, 32]));
//lowest, highestnya bisa pake math.max sama math.min

// function lowHighAv2(input: number[])
