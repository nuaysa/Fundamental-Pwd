function ArrToStr(input: string[]){

    const firstArr = input.slice(0, -1).join(", ") // input.pop() || ""
    const lastArr =input[input.length -1]

    const res = firstArr + ", and " + lastArr 

    return res
}

console.log(ArrToStr(["apple", "banana", "cherry", "date"]));