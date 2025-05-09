const express = require('express');
const router = express.Router();

router.post('/',(reg,res)=>{
    const {fname , lname , email , subject , message} = req.body
    console.log('content from submited', {fname , lname , email , subject , message});
    res.status(200).json({status:"Message Recieved"})
});

module.exports = router