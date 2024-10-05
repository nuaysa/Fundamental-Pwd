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
