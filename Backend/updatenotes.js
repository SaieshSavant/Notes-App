const express = require('express')
const router = express.Router()
const notes = require('./Createnotes');
const mongodb = require('./DB');

router.put('/updatenotes', async (req, res) => {
    try {
      
      const { ptitle,newtitle, newnotes } = req.body;
  
     const response= await notes.findOneAndUpdate(
        {title:ptitle},
        {$set:{"title":newtitle,"notes": newnotes}}
        
    );
      res.json({ success: true });
      mongodb();
      
    } catch (error) {
      res.json({ success: false });
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  

  module.exports = router;