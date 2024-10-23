function addElement(input:any[], add: string | number){
    if(typeof add == 'number'){
        add.toString
    }
    var res: any[]= [input.push(add)]

    return input
}

console.log(addElement([1,2,3,],4));

//

function plusOne(digits: number[]): number[] {
    var awal: number[] = digits
    var akhir = digits.length -1
    var lalu = awal[akhir] + 1
    lalu.toString()
    var res : any[] = [awal.push(lalu)]


    return awal
};

console.log(plusOne([1,2,3]))

//
function addLast(digits:number[]): number[] {
    digits[digits.length] = digits[digits.length-1] +1
    
    return digits
}

console.log(addLast([1,2,3]))