const express = require('express')
const mongoose = require('mongoose');

const app = express()

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello from node API"); // that means response is comming from node api
});

app.post('/api/products',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});

mongoose.connect("mongodb+srv://anshsrivastava0987:Zc1lwQ1GJRupsCv4@cluster0.txsxcxp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to database!");
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    });
})
.catch(()=>{
    console.log("Connection Failed!");
});


// to be removed
.then(()=>{
    console.log("Connected to database!");
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    });
})