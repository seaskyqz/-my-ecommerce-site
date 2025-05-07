const express = require('express');
const path = require('path');
const app = express();

// sever static file from current project folder
app.use(express.static(__dirname));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"))    
})

app.listen(3000 ,()=>{
    console.log("Sever is runninng at http://localhost:3000");
} )