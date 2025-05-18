const express = require('express');
const router = express.Router();

const fs = require('fs');
const path = require('path');

router.post('/',(req,res) => {
    const {email} = req.body;
    const subscribe = {subscribeAt : new Date(), email};

    const filePath = path.join(__dirname,'..','data','subscribe.json');

    let subscribes = [];
    if(fs.existsSync(filePath)){
         //file is there
        const filedata = fs.readFileSync(filePath, 'utf-8');
        subscribes =JSON.parse(filedata);
        subscribes.push(subscribe);
        fs.writeFileSync(filePath, JSON.stringify(subscribes, null, 2));
        res.status(200).json({status : "Message Received"});
        console.log('Content from submited', {email});
    }else{
        //no file
        subscribes.push(subscribe)
        fs.writeFileSync(filePath, JSON.stringify(subscribes, null, 2));
        res.status(200).json({status : "Message Received"});
        console.log('Content from submited', {email});
    }


});

module.exports = router;