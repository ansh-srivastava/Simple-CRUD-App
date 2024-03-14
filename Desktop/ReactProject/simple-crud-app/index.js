const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

app.get('/',(req,res)=>{
    res.send("Hello from node API"); // that means response is comming from node api
});