import { getAllProductsAsync } from "./productService.js";


const products = getAllProductsAsync()
.then(results => { 
  console.log(...results);
})


//   const query = 
//   `SELECT *  \
//   FROM Products`

// // simple query
// connection.query(
//    query,
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       //console.log(fields); // fields contains extra meta data about results, if available
//     }
//   );

//   const insertQuery =  
//   `INSERT INTO Products (Id, Description, Sku) 
//   VALUES (?, ?, ?)`

//   connection.query(insertQuery, [5, "My New Product", "123454"], 
//   (err, results) => {
//     if(err){
//       console.log(err)
//     }

//     console.log(results)
//   })

// connection.end();