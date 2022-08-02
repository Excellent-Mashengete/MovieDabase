const {Client} = require("pg");
// const local ={
//     HOST:'localhost',
//     USER:'admin',
//     DB:'userman',
//     PASS:'admin12345',
//     PORT:'5432',
//     DIALECT:'postgres'
// }
// postgres://ejuhkgfxdbccqd:902664f1c7e6c2254766da1e8193f892889dfed4d8033197613f7f36a76a4e2a@ec2-44-206-197-71.compute-1.amazonaws.com:5432/d7au8bhh8ggg5o
const client = new Client({
    connectionString: process.env.DB_CONNECTION,
    ssl:{
        rejectUnauthorized: false //allows external access to database when using nodejs
    }
});

module.exports = client