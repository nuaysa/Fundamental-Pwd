function sortArray(nums: number[]): number[] {
    for(var i = 0; i< nums.length; i++){
        for(var j = 0; j < nums.length - 1- i; j++){
            if(nums[j+1] < nums[j] ){
                [nums[j], nums[j+1]] = [nums[j + 1], nums[j]] 
            }
        }
    }

    return nums
};

console.log(sortArray([1,4,5,3,6,7,8]));