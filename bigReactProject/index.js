const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send({hi:'this is a big project'});
    
})



app.listen(5000);