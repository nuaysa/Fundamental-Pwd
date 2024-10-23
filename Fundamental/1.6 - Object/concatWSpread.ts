const data1 = [1, 2, 3];
const data2 = [4, 5, 6];
const finalData = [...data1, ...data2]

console.log(finalData);

const object1 = {
    name : "wataru"
}
const object2 ={
    age : 32
} 
const bothObj = {...object1, ...object2}
console.log(bothObj);


