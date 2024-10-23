function binarySearch(arr: number[], l:number, r: number, x: number){
    if(r>=l){
        let mid = l + Math.floor((r - l)/ 2)

        if(arr[mid] == x) return mid

        if (arr[mid]> x){
            return binarySearch(arr, l, mid - 1, x)
        }
        return binarySearch(arr, mid+ 1,r, x)
    }
    return -1
}

let arr = [1,2,3,10,40]
let x = 10

console.log(binarySearch(arr, 0, arr.length - 1, x));
console.log(arr.indexOf(x));
