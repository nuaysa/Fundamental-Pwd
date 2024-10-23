class Students{
    name = ""
    email= ""
    dob = ""
    score = 0

    constructor (nama: string, surel: string, tanggal: string, nilai:number){
        this.name = nama
        this.email = surel
        this.dob = tanggal
        this.score = nilai
    }

    getAge(){
        let now: Date = new Date()
        let date =new Date(this.dob)
    
        const gapInMs = now.getTime() - date.getTime()
        const age = Math.floor(gapInMs/ (1000* 60 * 60 * 24 * 356))
    
        return age
    
    }
}

const student1 = new Students("Andi","andi@gmail.com","2006-07-29",90)
const student2 = new Students("Agein","agein@gmail.com","2007-08-09",80)
const student3 = new Students("Cia","cia@gmail.com","2005-02-14",85)

student1.dob = student1.getAge().toString()
student2.dob = student2.getAge().toString()
student3.dob = student3.getAge().toString()

const arr = [student1, student2, student3]
console.log(arr);


function studentData(input: any[]){
        const dataScore = arr.map((item) => item.score).sort((a,b)=> a-b)
        const dataAge = arr.map((item) => item.getAge()).sort((a,b)=> a - b)



        return {
            score: {
                highest : dataScore[dataScore.length-1],
                lowest : dataScore[0],
                average : dataScore.reduce((a, b) => a + b)/dataScore.length
            },
            age: {
                highest : dataAge[dataAge.length -1],
                lowest: dataAge[0],
                average: dataAge.reduce((a,b) => a + b)/dataAge.length
            }
        }
    }




console.log(studentData(arr));
