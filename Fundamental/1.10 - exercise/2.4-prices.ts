function profit(prices: number[]){
var min = Math.min(...prices)
var index = prices.indexOf(min)
var arr = []

    for(var i = index + 1; i < prices.length; i ++){
            arr.push(prices[i] - min)
        }
        var high = Math.max(...arr)
        var idxMax = arr.indexOf(high)

    return index + idxMax 
}

console.log(profit([2,9,7,1,5,3,6,4]));
console.log(profit([7,1,5,3,6,4]));
// console.log(profit([6,4,3,1]));


//

function maxProfit(prices: number[]){
    let profit = 0
    let termurah = Infinity;

    for(let i = 0;  i < prices.length; i ++){
        if(prices[i] < termurah){
            termurah = prices[i]
        }
        if(prices[i] - termurah > profit){
            profit = prices[i] - termurah
            }
        }
return profit
}

console.log(maxProfit([7,1,5,3,6,4]));

