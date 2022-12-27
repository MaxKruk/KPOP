console.log("interface definition")

interface Workerr{
    id: number,
    name: string
    surname: string
    available: boolean
    salary: number,
    category: string
}

function getAllWorkers2(): Workerr[] {
    let workers = [
        {id: 1, name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: "Business analyst"},
        {id: 2, name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: "QA"},
        {id: 3, name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: "QA"},
        {id: 4, name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: "Designer"},
    ]

    return workers
}



function getWorkerByID2(id: number): Workerr{
    let arr = getAllWorkers2()
    
    return arr.filter(value => id === value.id)[0]
}



function PrintWorker(person: Workerr){
    console.log(person.name + " " + person.surname + " got salary " + person.salary)
}

PrintWorker(getWorkerByID2(4))

interface PrizeLogger{
    a: string
}

interface Person{
    name: string,
    email: string
}

interface Author extends Person{
    numBooksPublished: number
}


interface Librarian extends Person{
    department: string,
    assistCustomer: (custName: string) => void
}

let favoriteAuthor: Author = {numBooksPublished: 5, name: "Max", email: "hhhh@gmail.com"}
let favoriteLibrarian: Librarian = {
    department: "53",
    name: "Hector",
    email: "jamp@gmail.com",
    assistCustomer: (custName: string) => {
        console.log(custName)
    }
}


console.log("creation and using classes")

class ReferenceItem{
    protected title: string
    protected year: number
    private _publisher: string = "victor"
    private department: string = "2"

    constructor(newTitle: string, newYear:  number) {
        this.title = newTitle
        this.year = newYear
        console.log("Creating a new ReferenceItem")
    }

    public printItem(){
        console.log(`title ${this.year} was published in year ${this.year} in department ${this.department}`)
    }

    public getPublisher(): string{
        let a: string = this._publisher
        return a.toUpperCase()
    }

    public setPublisher(newPublisher: string){
        this._publisher = newPublisher
    }
}

let ref: ReferenceItem = new ReferenceItem("hello", 2004)

ref.printItem()

ref.setPublisher("Max")
console.log(ref.getPublisher())


console.log("class expantion")

class Encyclopedia extends ReferenceItem{
    public edition: any

    public printItem(){
        console.log(`Edition: (${this.year})`)
    }
}

let refBook = new Encyclopedia("hello", 2002)
refBook.printItem()

console.log("abstarct class creation")

abstract class ReferenceItem2{
    protected title: string
    protected year: number
    private _publisher: string = "victor"
    private department: string = "2"

    constructor(newTitle: string, newYear:  number) {
        this.title = newTitle
        this.year = newYear
        console.log("Creating a new ReferenceItem")
    }

    public printItem(){
        console.log(`title ${this.year} was published in year ${this.year} ${this.department}`)
    }

    public getPublisher(): string{
        let a: string = this._publisher
        return a.toUpperCase()
    }

    public setPublisher(newPublisher: string){
        this._publisher = newPublisher
    }

    abstract printCitation()
}




class Encyclopedia2 extends ReferenceItem2{
    public edition: any

    public printItem(){
        console.log(`Edition: edition (${this.year})`)
    }

    public printCitation(){
        console.log(this.title + " - " + this.year)
    }
}

let refBook2 = new Encyclopedia2("hello", 2004)
refBook2.printCitation()