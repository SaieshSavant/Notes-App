const express = require('express')
const router = express.Router()
const notes = require('./Createnotes')


router.post('/Allnotes',(req,res)=>{
            try {
             
                res.send([global.allnotes]);
            } catch (error) {
                console.error(error.message);
                res.send("Server error");
            }
        })
        


module.exports = router;