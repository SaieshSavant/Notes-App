const express = require('express')
const router = express.Router()
const notes = require('./Createnotes');
const mongodb = require('./DB');




router.post("/deletenotes", async (req, res) => {

          

            try {
                   
                  
                 await notes.findOneAndDelete({title:req.body.title});
                  
                  res.json({ success: true });              
                  mongodb();
                  
                  
            } catch (error) {
                  console.log(error);
                  res.json({ success: false });
                  
                  console.log("error");
            }

      });

module.exports = router;