
import mysql from 'mysql2';

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root', //can be any user name
    password: 'nicolas52',
    database: 'Commerce'
})

const getAllCustomers = async () => {
    const selectQuery = 'SELECT * FROM Customers'

    const [customers, fields] = await connection.promise().query(selectQuery)

    console.log('this is the', customers)  

    return customers
}



const createCustomers = async (cust) => {
    const insertQuery = `INSERT INTO Customers (Id, Name, Email)
    VALUES (?, ?, ?)`

    const [results] = await connection.promise()
    .query(insertQuery, [cust.id, cust.name, cust.email])

    console.log(results)
    return results 
}

createCustomers({
    id: 1,
    name: "Darie Dorlus",
    email: "darie@dorlus.com"
})

getAllCustomers() 
connection.end()
