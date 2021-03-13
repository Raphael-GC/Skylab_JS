const user = {
    name: "Raphael",
    transactions: [],
    balance: 0
};

const transaction = [
    {type: "credit", value: 50},
    {type: "credit", value: 120},
    {type: "debit", value: 80},
    {type: "debit", value: 30}
]

function createTransaction({type,value}) {
   if (type === "credit") {
        user.transactions.push({type,value})

        user.balance = user.balance + value
    }
    else {
        user.transactions.push({type,value})

        user.balance = user.balance - value
    }
}

function getHigherTransactionByType(type) {
    let maior = {}
    let value = 0
    for (let op of user.transactions) {
        if (op.type === type) {
            if (op.value > value) {
                value = op.value
                maior = op
            }    
        }    
    } console.log(maior)
}

function getAverageTransactionValue() {
    let avg = 0
    for (let op of user.transactions) {
        avg = avg + op.value
    }
    avg = avg / user.transactions.length
    console.log(avg)
}

function getTransactionCount() {
    let cd = 0
    let db = 0
    for (let op of user.transactions) {
        if (op.type === "credit")
            cd++
        else
            db++
    }
    console.log(`{ credit: ${cd}, debit: ${db} }`)
}

createTransaction(transaction[0])
createTransaction(transaction[1])
createTransaction(transaction[2])
createTransaction(transaction[3])

console.log(user.balance)

getHigherTransactionByType("credit")
getHigherTransactionByType("debit")

getAverageTransactionValue()

getTransactionCount()