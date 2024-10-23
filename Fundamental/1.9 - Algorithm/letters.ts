function caseCount(input: string){
    var res: number[] =[0, 0]
    var str : string = input.replace(/[^a-zA-Z]/g, "")

    for(var i = 0; i < str.length; i++){
        if(str[i] == str[i].toLowerCase()){
            res[0]++
        }else{
            res[1]++
        }
    }
    return res
}

console.log(caseCount("Hello-Purwadhika"));
console.log(caseCount("B4ndung"));

//

function casesCount(str: string): number[]{
    const word = str.replace(/[\s/0-9]/g, "")
    const lower = word.replace(/[A-Z]/g, "")
    return [lower.length, word.length - lower.length]
}
console.log(casesCount("Hello-Purwadhika"));
console.log(casesCount("B4ndung"));