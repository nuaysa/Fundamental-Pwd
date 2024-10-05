const arr: string[]= ["A","B","c"]//array of string
const arr2: (number | string)[] = new Array("a","b","c")

console.log(arr[0], arr2);
console.log(arr.length)

arr.push("D","g");//nambahin dibelakang
arr.unshift("O")//nambahin didepan
arr.pop()//menghapus value terakhir
arr.shift()//menghapus value pertama
arr.splice(1, 1, "z")//hapus array dri index 1, sebanyak 1, dan tambahkan "z"

console.log(arr);

const numArr: number[] = [1,3,2]

numArr.sort((a,b) => a-b) //sort asc
numArr.sort((a,b) => b-a) //sort desc

console.log(numArr);

arr.sort()
arr.sort().reverse()

console.log(arr);

let oddNumber:number[] = numArr
.filter((item) => item % 2  && item > 1)
.sort((a, b) => b-a)

console.log (oddNumber.find((item) => item == 3))
console.log (oddNumber.findIndex((item) => item == 1))
console.log (oddNumber.includes(3))

//split string
const str: string = "Purwadhika Bandung"

console.log(str.split(""));//perhuruf
console.log(str.split(" "));//perkata
console.log(str.split("").join(" "));//untuk menjadikan string lagi dengan pemisah yang bisa diatur 
console.log(str.split("").toString());//untuk menjadikan string lagi 

const newArr: number[] = [10,20,30,40,50] 

newArr.forEach((item, idx) =>{
    console.log(item,idx);  
})//buat looping,sama dapetin indexnya, bisa juga forEachnya diganti sama map

 /*
 map bisa return array baru
 */

 const mapArr: number[] = [15, 25, 35, 45, 55]
 const mapArr2:number[] = mapArr.map((item) =>item +=5)
 const mapArr3:number[] =[]

 mapArr.forEach((item) => {
    mapArr3.push(item + 5)
 })

 console.log(mapArr2);
 console.log(mapArr3);
 
//looping for
for(let item of newArr) {
    console.log(item);
    
}