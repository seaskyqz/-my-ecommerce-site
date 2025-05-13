const express = require('express');
const router = express.Router();

/*

*/

router.post('/', (req,res)=>{ 
   const {email}= req.body
   const subcribe = { subscribeAt : new Date(), email};

   const filePath = Path2D.join(__dirname,'. .','data','subscibe.json');

   console.log('Content from submited',{ email });

   let subcribes = [];

   if(FileSystem.existsSync(filePath)){
    // file is here
    const filedata = fs.readFileSync(filePath, 'utf-8');
    subcribes = JSON.parse(filedata);
    subcribes.push(subcribe);
    fs.writeFileSync(filePath, JSON.stringify((subcribes), null,2));
    res.status(200).json({status:"Message Recieved"});
    console.log('Content from submited',{email});
   } else {
    //no file
    subcribes.push(subcribe)
    fs.writeFileSync(filePath, JSON.stringify((subcribes), null,2));
    res.status(200).json({status:"Message Recieved"});
    console.log('Content from submited',{email});
   }

   
});