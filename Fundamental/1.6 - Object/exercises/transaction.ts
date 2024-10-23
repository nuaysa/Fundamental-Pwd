class Product{
    Name = "" 
    Price = 0

    constructor(nama: string, harga: number){
        this.Name = nama
        this.Price = harga
    }
}

let product1 = new Product("Apple", 20000)
let product2 = new Product("lychee", 30000)
let product3 = new Product("Cherry", 50000)

class transaction {
    #total: number = 0
    #products: object[] = []

    addToCart (product: Product, qty: number){
        this.#products.push({...product, qty, total: product. Price * qty})
        this.#total += product.Price * qty
    }

    show(){
        this.#products.unshift()
        this.#products.push({total: this.#total})
        console.table(this.#products)
    }

    checkout(money: number) {
        if(money < this.#total){
            throw new Error("Uang anda tidak cukup")
        }else{
            console.log(`Cash: ${money}`);
            console.log(`Return: ${money - this.#total}`);
            console.log(`~~~ Thank You ~~~`);
            
        }
    }
}

const transaction1 = new transaction()
transaction1.addToCart(product1, 2)
transaction1.addToCart(product2, 1)
transaction1.addToCart(product3, 3)

console.log(transaction1);

transaction1.show()
transaction1.checkout(250000)

