function climbingStairs(high: number): any {
  if (high === 1 || high === 0) {
    return 1;
  }else{
    return climbingStairs(high - 1) + climbingStairs(high - 2);
  } 
}


console.log(climbingStairs(3));

function fib (n: number) {
    const res: number[] = [0, 1]
    for(let i = 0; i < n; i++){
        res.push(res[i] + res[i + 1])
    }

    return res[n + 1]
}

console.log(fib(3));