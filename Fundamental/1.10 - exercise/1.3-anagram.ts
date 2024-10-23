function isAnagram (str1: string, str2: string): boolean{
const func = (str: string) => str.toLowerCase().split("").sort().join("")

return func(str1) == func(str2)
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("cat", "rat"));
