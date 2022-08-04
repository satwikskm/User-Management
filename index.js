const express = require('express')
const cors = require('cors')
const pool = require('./db/index')

const app=express()

app.use(cors())
app.use(express.json())


app.post('/login',async(req,res)=>{

    try {
        const {email,password}=req.body
        const validation = await pool.query("SELECT * FROM LOGIN WHERE email = $1 AND password = $2",[email,password])
        console.log(req.body)
        if(validation.rows.length > 0){
            console.log(validation.rows)
            return res.json("Success")

        }
        return res.json("Error")
       
        
        
    } catch (error) {
        return res.json(error)
        
    }
    
})
app.get('/allUser',async(req,res)=>{

    try {
       
        const validation = await pool.query("SELECT * FROM LOGIN")
        console.log(req.body)
        if(validation.rows.length > 0){
            console.log(validation.rows)
            return res.json(validation.rows)

        }
        return res.json("Not User found")
       
        
        
    } catch (error) {
        return res.json(error)
        
    }
    
})

app.post('/addUser',async(req,res)=>{

    try {
        let id = await pool.query("SELECT id FROM LOGIN ORDER BY ID DESC LIMIT 1")
        id = id.rows[0].id + 1
        console.log("id",id)
        const {username,email,password}=req.body
        let emailValidation = await pool.query("SELECT * FROM LOGIN WHERE email = $1",[email])
        if(emailValidation.rows.length > 1){
            console.log(emailValidation.rows,"new")
            return res.json("Record already exists")
        }
        else{
            console.log(username,email,password)
            const validation = await pool.query("INSERT INTO LOGIN VALUES ($1, $2 ,$3 ,$4)",[id,email,password,username])
            
            
                return res.json("Success")
    
            
        
        }
        
        
        
       
        
        
    } catch (error) {
        return res.json(error)
        
    }
    
})

app.delete('/remove',async(req,res)=>{
    try {
        const {id}=req.body
       
        const validation = await pool.query("DELETE FROM LOGIN WHERE id = $1",[id])
        console.log(validation,val)
        
            
            return res.json("Deleted")
 
    } catch (error) {
        return res.json(error)
        
    }

})

app.post('/updateUser',async(req,res)=>{

    try {
        const {id,username,email,password}=req.body
        console.log(username,email,password)
        const validation = await pool.query("UPDATE LOGIN SET email = $2 , password = $3 ,username = $4 WHERE id = $1",[id,email,password,username])
        console.log(validation)
        if(validation){
            
            return res.json("Success")

        }
        
       
        
        
    } catch (error) {
        return res.json(error)
        
    }
    
})
// app.post('/lockUser',async(req,res)=>{

//     try {
//         const {id}=req.body
        
       
//         const lock = await pool.query("UPDATE LOGIN SET lock = N WHERE id = $1",[id])
//         await setTimeout(()=>{
//             const unlock = pool.query("UPDATE LOGIN SET lock = Y WHERE id = $1",[id])

//         },24*60*60*1000)
//         return res.json("User Locked")
        
       
        
        
//     } catch (error) {
//         return res.json(error)
        
//     }
    
// })


app.listen(3000,()=>{
    console.log("Server started at port 3000")
})