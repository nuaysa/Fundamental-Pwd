function primitive(input: any[]){
    return input.filter((item) =>{const dataType = typeof item
    return (dataType === 'string') ||
            (dataType === 'bigint') ||
            (dataType === 'number') ||
            (dataType === 'undefined') ||
            (dataType === 'boolean') ||
            (dataType === 'symbol') ||
            (dataType === null);
    })
}

console.log(primitive( [1, [], undefined, {}, "string", {}, []]));

