import mysql from 'mysql2';

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root', //can be any user name
    password: 'nicolas52',
    database: 'Commerce'
}) 




const getAllContactPersons = async () => {
    const selectQuery = 'SELECT * FROM ContactPersons'

    const [contactPersons, fields] = await connection.promise().query(selectQuery)

    console.log('this is the', contactPersons)

    return contactPersons
}

const createContactPersons = async (cont) => {
    const insertQuery = `INSERT INTO contactPersons (Id, Name, Email, Phone, Adress) 
    VALUES (?, ?, ?)`
    const [results] = await connection.promise() 
    .query(insertQuery, [cont.id, cont.name, cont.email, cont.phone, cont.adress])

    console.log(results)

    return results
}

getAllContactPersons() 
connection.end()  