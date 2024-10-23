function pascal(rows: number){
        let triangle: number[][] = [];
    
        for (let i = 0; i < rows; i++) {
            triangle[i] = [];
            triangle[i][0] = 1;  
    
            for (let j = 1; j < i; j++) {
                triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
            }
    
            triangle[i][i] = 1;  
        }
    
        return triangle;
    }
    
console.log(pascal(5));
console.log(pascal(1));
console.log(pascal(2));

//

function pascall(n: number):number [][] {
    const res: any[] = []
    for(let i = 0; i < n; i++){
        const arr =[]
        for(let j = 0; j <= i; j++){
            if(j == 0 || j == i){
                arr.push(1)
            }else{
                arr.push(res[i-1][j-1] + res[i-1][j])
            }
        }
        res.push(arr)     
    }
    return res
}

console.log(pascall(5));
