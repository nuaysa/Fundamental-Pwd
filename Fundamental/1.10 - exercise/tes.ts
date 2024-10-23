const data: any[] = [
    () => [
        ["andi", "budi"],
        false
    ],
    [() => [10, 11, 12], 13],
    { num: [1, 2, 3], count(){ return "Hello World" } },
    () => () => {
        return {
            great() {
                return "Purwadhika Bandung"
            }
        }
    }
]


console.log(typeof true)


