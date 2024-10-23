//another way
const jmlHari: number = 400

const sisa: number = jmlHari % 365
const sisa2: number = sisa % 30

const year: number = (jmlHari- sisa) / 365
const month: number = (sisa - sisa2) / 30
const day: number = sisa2

const result: string = `${year} year, ${month} months, ${day} days`

console.log(result);

//converting date 
const numberOfDays: number = 400

const years = Math.floor (numberOfDays / 365);
const remainingDays = (numberOfDays % 365);
const months = Math.floor(remainingDays / 30);
const days= remainingDays % 30;

console.log(`${years} year, ${months} months, ${days} days`);
