const bodyParser = require('body-parser');
const cors=require('cors')
const express=require('express');
const app=express();
const mysql=require('mysql');

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'LOGINDatabase'
})

app.use (express.json()) 
app.use (cors());
app.use(bodyParser.urlencoded({extended:true}))

app.post("/register", (req,res) => {
    const userName=req.body.userName;
    const userEmail=req.body.userEmail;
    const userPassword=req.body.userPasswword;
db.query(
    "INSERT INTO user_credentials(userName,userEmail,userPassword) VALUES(?,?)",
[userName,userEmail,userPassword],
(err,result) =>{
    console.log(err)
 }
)
})
app.listen(3005,()=>{
    console.log("running in port 3005")
})
