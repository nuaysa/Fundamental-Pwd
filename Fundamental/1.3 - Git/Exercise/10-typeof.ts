var input: any = 32

var output: string =""
 
if (typeof input == 'string'){
    output = "1"    
}else if( typeof input == 'number'){
    output = "2"
}else{
    output = "3"
}

console.log(output);
