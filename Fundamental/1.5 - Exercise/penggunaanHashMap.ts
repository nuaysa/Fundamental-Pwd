function twoSum(nums: number[], target: number){ 
    const hashMap: { [key: number]: number } = {}; 
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; 
        
        if (hashMap[complement] !== undefined) {

            return [hashMap[complement], i];
        } 
        
        hashMap[nums[i]] = i; 

    } 
};

console.log(twoSum([2,7,11,15], 9))

// function getTarget(arr: number[], target: number){
//     const hashMap : {[key: number]: number} = {};

//     for(let i = 0; i < arr.length; i++)
//         var hasil = target - arr[i];

//         if(hashMap[hasil] == undefined)

// }

// console.log(getTarget([10,20,30,50], 70))
