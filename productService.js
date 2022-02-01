import { getConnection } from "./db.js";

export const getAllProducts = () => {
    const connection = getConnection();

    //return connection.query("SELECT * FROM products")
    
    return connection
    .query("SELECT * FROM products")
    .then(results => {
        return results;
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        connection.end();
    })

    
}

export const getAllProductsAsync = async () => {
    const connection = getConnection();
    const products = [];
    try {
         products =  await connection.query("SELECT * FROM products")

    } catch (err) {
        console.log(err);
    } finally {
        connection.end();
    }

    return products;
}