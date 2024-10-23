function intersection(obj1: {[key: string]: number}, obj2: {[key: string]: number}){
    let res :{[key: string]: number} = {}

    for(var key in obj1){
        if(obj2.hasOwnProperty(key) && obj1[key] === obj2[key]){
            res[key] = obj1[key];
        }
    }

    return res
}

console.log(intersection({a: 1, b: 2}, {a: 1, c: 3}));
