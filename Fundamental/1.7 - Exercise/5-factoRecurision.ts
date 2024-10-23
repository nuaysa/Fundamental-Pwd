function factorial(n: number): number{
    if(n <= 1){
        return 1
    }
    return n * factorial(n-1)
}

function shorterFactorial(n: number): any{
    return n == 0? 1 : n * shorterFactorial(n-1)
}

console.log(shorterFactorial(5));