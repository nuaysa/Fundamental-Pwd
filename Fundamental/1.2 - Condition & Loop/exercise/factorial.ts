var fact: number= 5

if (fact===0 || fact ===1){
    let rem: number= 1
}for (var i = fact - 1; i >= 1; i--){
    fact*= i;
    }
    console.log(fact);

    //rekursif (function)
    var n: number = 3
    function factorial(n){
        if (n == 0){
            return 1;
        }return n* factorial(n-1);
    }