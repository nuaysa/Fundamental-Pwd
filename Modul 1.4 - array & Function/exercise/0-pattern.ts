function triangle(height: number) {
    for (let i = 1; i <= height; i++) {
        let res: string =""
        for(let j = 1; j <= i; j++){
            res += `${j}`
        }
        console.log(res);
    }
}

triangle(5)