function twoSum(nums: number[], target: number)//: number[] 
{
    var hashMap: {[key: number]: number} ={};

    for(var i = 0; i < nums.length; i++){
        const x = target - nums[i]
        
        if(hashMap[x] !== undefined){
            return [hashMap[x], i]
        }
        hashMap[nums[i]] = i 
    }
    return null
};

function mergeTwoLists(list1: number[], list2: number[]) {
    var res :number[] =[...list1, ...list2].sort((a, b) => a - b)

    return res
};

// console.log(mergeTwoLists([1,2,3],[1,2,3,3,4]));
// console.log(mergeTwoLists([1,2,3],[]));

function merge(nums1: number[], m: number, nums2: number[], n: number){
    nums1.splice(m, m , ...nums2);
    nums1.sort((a, b) => a -b )
    return nums1
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));

function SearchIndexTarget(arr: number[], target: number) {
    if (arr. includes(target)) {
       return arr.indexOf(5) 
     }
   else {
   arr.push(target)
   arr.sort((a, b)=> a- b)
    return arr. indexOf(target)
    }
}

console.log(SearchIndexTarget([1,3,5,6], 5));
console.log(SearchIndexTarget([1,3,5,6], 2));
console.log(SearchIndexTarget([1,3,5,6], 7));

const str = "hello".split("")
console.log(str.reduce((a, b) => a + b))

function FizzBuzz(n: number ): string[]{
    var res: string[] = []

    for(var i = n; i > 0; i -- ){
        // console.log(i.toString())
        }
        if(i % 3 ==0 && i % 5 == 0){
            res.push("FizzBuzz") 
        }
        if(i % 3 == 0){
            res.push("Fizz")
        }
        if(i % 5 == 0){
            res.push("Buzz")
        }else{
            res.push(i.toString())
        }
        
        return res
    }


console.log(FizzBuzz(10));




function twoSum2(nums: number[], target: number): any
{   
    var i = 0
    var j = 0

    for(i = 0; i < target; i++){
        var one = nums[i]
        for(j = i + 1; j < nums.length; j ++){
        var two = nums[j]
            if(target - one == two){
                return [i, j]
            }
        }
    }
};


console.log(twoSum2([2,7,11,15], 9));
console.log(twoSum2([3,2,4], 6));

//Add Strings

// function addStrings (num1: string, num2: string){
//     var arr = num1.split("")
//     var arr2 = num2.split("")

//     if(arr.length == arr2.length){
//         for(var i = arr.length; i > 0; i--){
//             arr[i] + arr2[i]
//         }
//     }
// }

function capitalizeTitle(title: string): string {
    var res: string = ""
    var basic: string = title.toLowerCase()

    for( var i = 0; i < basic.length; i++){
        if(i == 0 || basic.charAt(i - 1) == " "){
            res += basic.charAt(i).toUpperCase()
        }else{
            res += basic.charAt(i) 
        }
    }
    var splitted =res.split(" ")
        for(var i= 0; i< splitted.length; i++ ){
            if(splitted[i] && splitted[i].length < 3){
                splitted[i] = splitted[i].toLowerCase()
            }
        }
        
        return splitted.join(" ")
}
    
console.log(capitalizeTitle(" capiTalIze tHe tiTlE Of a"));
    

































