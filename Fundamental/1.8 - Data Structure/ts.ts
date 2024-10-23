function missingNumber(nums: number[]){
    var sorted = nums.sort((a, b) => a - b)
    for(var i= 0; i<nums.length; i++){
        if(nums[i] !== i ){
            return i
        }else if(nums[nums.length - 1] !== nums.length){
            return nums.length
        }
    }
};

console.log(missingNumber([1,0,3]));
console.log(missingNumber([1,0]));
