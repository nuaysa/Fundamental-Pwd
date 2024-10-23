function checkEqual(a: {[key: string]: any}, b: {[key: string]:any}){
    var key1 = Object.keys(a)
    var key2 = Object.keys(b)
    

    if(key1.length !== key2.length){
            return false;
    }
        for(let key in a){
            if(a[key] !== b[key]){
                return false;
            }
        }
        return true;
}
        
console.log(checkEqual({a : 2},{a : 1}));
console.log(checkEqual({a : "Hello"},{a : 1}));
console.log(checkEqual({a : 1},{a : 1}));



