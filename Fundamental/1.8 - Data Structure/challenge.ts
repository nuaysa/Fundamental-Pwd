function tambah(input: string){
    input.toLowerCase()
    var alphabet: any[] = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var res = 0

    for(var i = 0; i< alphabet.length; i++){
        if(alphabet.includes(input.charAt(i))){
            var num = alphabet.indexOf(input.charAt(i))

            res+= num + 1
        }
    }
    return res
}

console.log(tambah("abcde"));
console.log(tambah("bandung"));

//

function myFunc(str: string) {
    const alpha: string[] =" abcdefghijklmnopqrstuvwxyz".split("")

    return str.split("").map(item => alpha.indexOf(item.toLowerCase())).reduce((a, b) =>a + b)
}


// function fourSum(nums: number[], target: number): number[][] {
//     var one = nums.map(item => nums[item] < target)
    

//     for(var i = 0; i < nums.length; i++){
//         for(var j = i + 1; j < nums.length; j++){
//         }
//     }
// };

// console.log(fourSum([1,0,-1,0,-2,2], 0));

function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; 
                while (left < right && nums[right] === nums[right - 1]) right--; 
                left++;
                right--;
            } else if (sum < 0) {
                left++; 
            } else {
                right--;  
            }
        }
    }

    return result;
}
console.log(threeSum([0,-1,1,2]));
console.log(threeSum([0,0,0,0]));
console.log(threeSum([0,0,0,]));

let arr = [1,2,3,4,5]
arr.pop()
    console.log(arr);
    

function searchRange(nums: number[], target: number): number[] {
    var res: number[] =[]
    for(var i = 0; i < nums.length; i++){
    if(nums[i] == target){
            res.push(i)
            if(res.length > 2){
                res = [res[0], res[res.length -1]]
            }
            if(res.length < 2){
                res = [res[i]]
            }
        }
    }
    if(!nums.includes(target)){
        res =[-1, -1]
    }


return res
}

console.log(searchRange([1,2,2,2,3,4,8,8,9],0));
 
//apa contoh method yang membutuhkan unary operand