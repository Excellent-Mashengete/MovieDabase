const {Client} = require("pg");
// const local ={
//     HOST:'localhost',
//     USER:'admin',
//     DB:'userman',
//     PASS:'admin12345',
//     PORT:'5432',
//     DIALECT:'postgres'
// }
const DB_CONNECTION =  "postgres://jokxbzwdhwcljm:49d4aae070bfc50680e97293ec4c46be644d5fb162bc093f7fe7199e4177ed0a@ec2-34-199-68-114.compute-1.amazonaws.com:5432/dba70kiu69h4av"
const client = new Client({
    connectionString: DB_CONNECTION,
    ssl:{
        rejectUnauthorized: false //allows external access to database when using nodejs
    }
});

module.exports = client
