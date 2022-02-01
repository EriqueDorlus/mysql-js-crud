import mysql from 'mysql2'; 
import { creds } from './dbCreds.js';

let connection = null;

export const getConnection = () => {
    if(!connection){
        connection = mysql.createConnection(creds())
    }

    return connection;
}

export const getMongoDbConnection = () => {}