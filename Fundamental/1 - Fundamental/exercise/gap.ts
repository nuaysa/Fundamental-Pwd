//gap between dates
const date1 = new Date ('2022-01-20')
const date2 = new Date ('2022-01-22')

// Calculate the time difference in milliseconds
const timeDifferenceMs = date2.getTime() - date1.getTime();

// Convert milliseconds ke hari
const daysDifference = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24)); //1 detik = 1000 ms, 1m = 60s, 1h = 60s, 1d= 24h

const result: string = (`The difference between the dates is ${daysDifference} days.`);

console.log(result);

