function triangle(height: number){
    let start = 1
    let res = ''
    for(let i = 1; i <= height ; i++){
        let row = ''
        for(let j = 1; j <= i; j++){
            row += String(start).padStart(2,'0') + " "
            start ++   
        }
        res += row + '\n'        
    }
    return res;
}

console.log(triangle(4));

//
function pattern(height: number) {
    let result: string =''
    let counter: number = 0
    for (let i = 1; i <= height; i++) {
        let res: string =""
        for(let j = 1; j <= i; j++){
            counter++
            if(counter < 10){
                res += `0${counter} `
            }else{
                res += `${counter} `
            }
        }
            if (i !== height) 
                res += "\n"
        result += res
    }
    return result
}

console.log(pattern(4));

