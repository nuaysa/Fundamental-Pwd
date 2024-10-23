function calculate(first: number [], second:number[]){
    var c1 = first[0] + second[0]
    var c2 = first[1] + second[1]
    var c3 = first[2] + second[2]

    var res: number[] = [c1, c2, c3]

    return res
}

console.log(calculate([1,2,3],[3,2,1]));

function cal(one: number[], two:number[]){
    var res =[]
    for(let i= 0; i < one.length; i++){
        let b = one[i] + two[i]
        res.push(b)
    }

    return res
}

console.log(cal([3,2,1],[1,2,3]));
