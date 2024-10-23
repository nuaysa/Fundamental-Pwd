
function merge(arr1 : any[], arr2: any[]){
//let res = arr1
    for(let item of arr2){
        const index = arr1.findIndex((value) => value.name == item.name && value.email ==item.email)
    if(index == -1){
        arr1.push(item)
    }
    }
    return arr1
}

const arr1 = [{name: 'student1', email: "student1@gmail.com"},
            {name: 'student2', email: "student2@gmail.com"}
    ]
const arr2 = [{name: 'student2', email: "student2@gmail.com"},
            {name: 'student4', email: "student4@gmail.com"}
    ]
    
console.log(merge(arr1, arr2));












