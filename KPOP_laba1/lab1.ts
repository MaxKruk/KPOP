console.log("basik types|")

function getAllWorkers() {
    let workers = [
        {id: 1, Name: 'Ivan', surname: 'Ivanov', available: true, salary: 1000, category: "Business analyst"},
        {id: 2, Name: 'Petro', surname: 'Petrov', available: true, salary: 1500, category: "QA"},
        {id: 3, Name: 'Vasyl', surname: 'Vasyliev', available: false, salary: 1600, category: "QA"},
        {id: 4, Name: 'Evgen', surname: 'Zhukov', available: true, salary: 1300, category: "Designer"},
    ]

    return workers
}


function logFirstAvailable(a = getAllWorkers()) {

    console.log('Count of workers:')
    console.log(a.length)

    for (let value of a) {
        console.log(value['Name'] + ' ' + value['surname'])
    }
}

logFirstAvailable(getAllWorkers())


console.log("Enum|")

enum Category {
    "Business analyst",
    "Developer",
    "Designer",
    "QA",
    "Scrum master"
}



function getWorkersNamesByCategory(ct: string = Category[2]): string[] {
    let arr = getAllWorkers()
    let sur: string[] = []
    for (let value of arr){
        if (ct == value["category"]) {
            sur.push(value["surname"])
        }
    }

    return sur
}


function logWorkersNames (arr: string[]){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}

console.log("Workers by category:")
logWorkersNames(getWorkersNamesByCategory(Category[3]))


console.log("Arrowed functions|")

let f1 = (ct: string) => {
    let arr = getAllWorkers()

    arr.forEach((value) => {
        if (ct == value["category"]) {
            console.log(value["Name"] + " " + value["surname"])
        }
    })
}

console.log("Find by cat:")
f1(Category[3])




let getWorkerByID = (id: number) => {
    let arr = getAllWorkers()

    arr.forEach((value) => {
        if (id == value["id"]) {
            console.log(value["Name"] + " " + value["surname"])
        }
    })
}


console.log("Find by id:")
getWorkerByID(3)



console.log("Functions types|")


function createCustomerID (name: string, id: number): string{
    return id + " " + name
}

console.log("Concat str:")
let myID: string = createCustomerID("Ann", 10)
console.log(myID)




let IdGenerator = (name: string, id: number) =>{
    return id + " " + name
};


console.log("task3,4:")
console.log(IdGenerator("vova", 20))


console.log("Parametrs|")
console.log("1:")

function createCustomer (name: string, age?: number, city?: string){
    let template: string = name;

    if (age != null){
        template = template + " " + age
    }

    if (city != null){
        template = template + " " + city
    }

    console.log(template)
}

createCustomer("Viktor")
createCustomer("Viktor", 6)
createCustomer("Viktor", 6, "kyiv")


console.log("2:")
logWorkersNames(getWorkersNamesByCategory())

console.log("3:")
logFirstAvailable()

console.log("4,5:")
function сheckoutWorkers (customer: string, workerIDs: number []): string[]{

    let arr = getAllWorkers()
    let res: string[] = []



    for (let value of arr) {
        let tempRes: string = ""

        for (let k = 0; k < workerIDs.length; k++){
            if (value["id"] == workerIDs[k]){
                if (value["Name"] == customer){
                    if (value["available"] == true){
                        tempRes = tempRes + value["Name"] + " " + value["surname"]

                        res.push(tempRes)
                    }

                }
            }

        }
    }

    return res
}


let myWorkers: string[] = сheckoutWorkers("Evgen", [4])

myWorkers.forEach((value) => {
    console.log(value)
})