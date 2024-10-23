function splitWord(input: string) {
    var arr = input.split("");
        for (var i = 0; i < arr.length; i++) {
            if(arr[i] == arr[i].toUpperCase()){
                var tambah = " " + arr[i]
                arr.splice(i, 1, tambah)
            // console.log(arr[i]);
            }
        }

return arr.join("").split(" ")
}

console.log(splitWord("helloWorld"));
console.log(splitWord("johnDoeMiller"));

//

function split(input: string) {
    return input.split(/(?=[A-Z])/)
}
console.log(split("helloWorld"));
console.log(split("johnDoeMiller"));