const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.end('{"contactSubject": ["General Enqury","Class","Schudle","Cybersecurity Specialist","Cloud Engineer","UX/UI Designer","Other","kai"]}');
});

module.exports = router;

