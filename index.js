const bodyParser = require('body-parser');
const cors=require('cors')
const express=require('express');
const app=express();
const mysql=require('mysql');

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Newtonmw19&&',
    database: 'LOGINDatabase',
    
})

app.use (express.json()) 
app.use (cors());
app.use(bodyParser.urlencoded({extended:true}))

app.post("/register", (req,res) => {
    const userName=req.body.userName;
    const userEmail=req.body.userEmail;
    const userPassword=req.body.userPassword;
db.query(
    "INSERT INTO user_credentials(userName,userEmail,userPassword) VALUES(?,?,?)",
[userName,userEmail,userPassword],
(err,result) =>{
    console.log(err)
 }
)
})

app.post("/login", (req,res) => {
    const userName=req.body.userName;
    const userEmail=req.body.userEmail;
    const userPassword=req.body.userPassword;
db.query(
    "SELECT * FROM user_credentials WHERE userName=?, userEmail=?, AND userPassword=?"
[userName,userEmail,userPassword],
(err,result) =>{

    if(err){
        res.send({err: err})
   }

    if(result.length>0){
        res.send(result)
    }else{
        res.send({message: "email and password do not match"})
    }
   
 }
)
})
app.listen(3005,()=>{
    console.log("running in port 4000")
})

