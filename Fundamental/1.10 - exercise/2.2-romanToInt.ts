function romanInt(input: string) {
  //I,V,X,M,L,C,D,M
  let romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result: number = 0;
  let arr: any[] = input.split("");

  for (let i = 0; i < input.length; i++) {
    let current = romanMap[arr[i]]
    let next = romanMap[arr[i + 1]]

    if(current < next ){
      result -= current
    }else{
      result += current
    }
  }
  return result;
}

console.log(romanInt("III"));
console.log(romanInt("IIV"));
console.log(romanInt("LVIII"));
