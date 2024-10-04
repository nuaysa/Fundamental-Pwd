const format: number = 1000

let IDR = new Intl.NumberFormat('idID', {
    style: 'currency',
    currency: 'IDR',
});

console.log(`The formated version of ${format} is Rp.{IDR.format(format)}`);
