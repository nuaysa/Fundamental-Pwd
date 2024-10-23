class Employee {
    name = ""
    type = ""
    #hour = 0
    #bSallary = 0
    #otSallary = 0

    constructor(nama: string, tipe: string, biasa: number, lembur: number){
        this.name = nama
        this.type = tipe
        this.#bSallary = biasa
        this.#otSallary = lembur
    }

    setHour(n: number){
        this.#hour += n
    }

    getSallary(){
        if(this.#hour <= 6){
            return this.#hour * this.#bSallary
        }else {
            return this.#bSallary * 6 + (this.#hour - 6) * this.#otSallary
        }
    }
}


class fullTime extends Employee {
    constructor(nama: string){
        super(nama, "full-time", 100000, 75000)
    }
}


class partTime extends Employee {
    constructor(nama: string){
        super(nama, "part-time", 50000, 30000)
    }
}


const employee1 = new fullTime("akkhtar")
employee1.setHour(10)
console.log(employee1.getSallary());
