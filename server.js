const connection = require("./db");
const cors = require("cors");
const express = require("express");
const app = express();
const contact = require('./schema');
const bp = require('body-parser');
app.use(bp.urlencoded({extended:true}))
connection();
app.use(express.json());
app.use(cors());
app.get('/', async (req,res)=>{
    res.sendFile( __dirname + "/"+"index.html"  );  
})
app.post('/', async(req,res)=>{
    var con = new contact({
    name :req.body.cname,
    num : req.body.cemail,
    type  :req.body.ctype,
    material : req.body.cmaterial,
    truck : req.body.ctruck,
     location : req.body.clocation,
    })
        try{
            await contact.create(con);    
            res.redirect('/disp');
        }catch(err){
            console.log(err);
        }
})
app.get('/disp',(req,res)=>{
    res.sendFile(__dirname+"/"+"success.html");
})
app.get("/dis",(req,res)=>{
    contact.find().then((result)=>{
        console.log(result)
        res.send(result);
    }).catch((err)=>{
        console.log(err)
    })
})
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));