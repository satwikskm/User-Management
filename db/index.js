const Pool = require('pg').Pool

const pool = new Pool ({
    user:"",
    password:"",
    host:"localhost",
    port:5432,
    database:""
})

pool.connect()

pool.on('connect',()=>{
  console.log("Connected")
})

pool.on('end',()=>{
  console.log("Connection closed")
})




module.exports = pool