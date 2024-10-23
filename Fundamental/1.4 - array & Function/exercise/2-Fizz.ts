function loop(end: number){
    var res = ''
    for(let i = 1 ;i <= end;  i++ ){
        if(i % 3 == 0 && i % 5 ==0){
            console.log("FizzBuzz");
        }else if(i % 3 == 0){
            var mul3 = i.toString().replace(`${i}`,"Fizz")
            console.log(mul3);
        }else if(i % 5 == 0){
            var mul5 = i.toString().replace(`${i}`,"Buzz")
            console.log(mul5);
        }else{
            console.log(i);
        }

    }
    return res
}
console.log(loop(15));


//

function loop1(end: number){
    var res :(string | number)[]=[]
    for(let i = 1 ;i <= end;  i++ ){
        if(i % 3 == 0 && i % 5 ==0){
            res.push("FizzBuzz");
        }else if(i % 3 == 0){
            res.push("Fizz")
        }else if(i % 5 == 0){
            res.push("Buzz");
        }else{
            res.push(i);
        }
    }
    return res.join(', ')
}

console.log(loop1(15));
