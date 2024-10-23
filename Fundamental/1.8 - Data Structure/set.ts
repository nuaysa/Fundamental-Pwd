const fruits: string[] = ["apple", "jackfruit","apple","banana"]
const nums: number[] = [1,2,3,4,4,4]

const newFruits = new Set(fruits)
const newNums = new Set(nums)

newFruits.add("melon")
newFruits.delete("apple")
// newFruits.clear()
newFruits.forEach((item) => {
    console.log(item);
})
    
console.log(newFruits.entries());
console.log(newFruits.values());



console.log(newFruits);
console.log(newNums);


console.log([...newNums]);

