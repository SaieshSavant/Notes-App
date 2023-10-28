const express = require('express')
const router = express.Router()
const notes = require('./Createnotes');
const mongodb = require('./DB');



router.post("/addnotes", async (req, res) => {

          

            try {
                  await notes.create({
                        title: req.body.title,
                        notes: req.body.notes
                  })
                  res.json({ success: true });
                  mongodb();
                  
            } catch (error) {
                  console.log(error);
                  res.json({ success: false });
                  
                  console.log("error");
            }

      });




module.exports = router;