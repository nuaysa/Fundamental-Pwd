//promise, untuk menangani operasi asinkron

const tryPrommise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        const success = true
        if(success){
            resolve("Task 2")
        }else{
            reject("error")
        }
}, 3000)
})

const myFunct = async () => {
    console.log('Task 1');
    
    await tryPrommise
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    // .finally(() => console.log("finally done"));
    
    console.log('Task 3');
    
}

// myFunct()

//async sama await buat nunggu  promise selesai, jadi bisa dijadikan sebagai pengganti .then dan .catch

//

const tryCatch = async() => {
    try {
        console.log('Task 1');
        const res = await tryPrommise
        console.log(res);
        console.log('Task 3');
    } catch (err) {
        console.log('Error');
        
    }
}

// tryCatch()

//

const getData = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok) throw 'failed fetch' //lempar error yang akan ditangkap catch, kalau throw new error errornya dri system
        const users = await response.json()
        console.log(users);
    }catch(err){
        console.log(err);
        
    }
}

getData()

