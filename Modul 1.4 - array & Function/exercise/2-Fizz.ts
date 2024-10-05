function detect(end: number){
    var res = 0
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
        res += i
    }
    return res
}

console.log(detect(15));
