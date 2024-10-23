function evenOnly(input:number[]){
    
    return input.filter((item) => item % 2 == 0)
}
console.log(evenOnly([1,2,3,4,5,6]));
