function sumArr (input: any[]){
    var res = 0
    if(typeof input == 'string'){
        return 'masukkan angka'
    }for (var i = 0 ; i < input.length ; i++)
    if(typeof input[i] == 'number'){
        res += input[i]
    }
    return res 
}

console.log(sumArr(["3",7,'string',null,1,7]))
