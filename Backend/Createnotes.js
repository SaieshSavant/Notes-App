const mongoose=require('mongoose')
const {Schema}=mongoose;
const notesschema=new Schema({
    title:{
        type:String,
        required:true
    },
    notes:{
        type:String,
        required:true
    }
    
})
module.exports=mongoose.model('notes',notesschema)