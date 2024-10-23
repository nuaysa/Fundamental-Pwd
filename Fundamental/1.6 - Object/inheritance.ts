class Product {
    productName = ""
    productPrice = 0

    constructor(name: string, price: number){
        this.productName = name
        this.productPrice = price
    }
}

class Book extends Product { //mengambil constructor dari Product
    title = ""
    author = "";

    constructor(title: string, author: string, price: number) {
        super("book", price)//akan mengakses constructor didalam product
        this.title = title
        this.author = author 
    }
}

const book1 = new Book("the Devotion of Suspect X", "Keigo Higashino", 99000 )

console.log(book1);
console.log(book1 instanceof Book);//apakah book1 bagian dari class Book
console.log(book1 instanceof Product);//apakah book1 bagian dari class Product

//keyword "super" itu untuk mengakses constructor dari parent classnya