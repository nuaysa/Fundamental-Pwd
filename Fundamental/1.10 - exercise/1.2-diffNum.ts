function onceAppear(nums: number[]) {
    return nums.reduce((item, res) => item ^ res, 0)
}

console.log(onceAppear([2,2,1]));
console.log(onceAppear([2,2,1,4,1]));

function singleNum(nums: number[]){
    nums.sort((a, b) => a - b);
    const res : number[] = []

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] !== nums[index + 1]  &&  nums[index] !== nums[index - 1]) {
            res.push(nums[index])
            }
    }
    return res
}


    console.log(singleNum([2,2,1]));
    console.log(singleNum([2,2,1,4,1]));
    
function filter(arr: number[]){
    return arr
    .filter((item, _idx, num) => num
    .filter(val => val == item).length ==1)
}

    console.log(filter([2,2,1]));
    console.log(filter([2,2,1,4,1]));