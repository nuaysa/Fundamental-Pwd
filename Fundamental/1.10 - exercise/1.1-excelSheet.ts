function excelSheet(n: string) {
    for(var i = 0;  i < n.length; i++) {
        if(n.length == 1){
        var res: number = n.charCodeAt(i) - 64
            
    return res
    }
    if(n.length > 1){
        var hasil = ((n.charCodeAt(0) - 64 ) *26) + (n.charCodeAt(1) - 64)

    return hasil
    }
}
}

console.log(excelSheet("AB"));
console.log(excelSheet("A"));
