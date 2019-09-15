const mongoose=require('mongoose')
const validator=require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    id: {
        type :String,
        required:true
    },
    empName: {
        type :String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        
        validate:{
            validator:function(value){
                return validator.isEmail(value)
            },
            message:function(){
                return "invalid email format"
            }
        }
    }

})

const User = mongoose.model('User',userSchema)

module.exports={
    User
}