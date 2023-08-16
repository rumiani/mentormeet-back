import mongoose from "mongoose";
import validator from 'validator';
const rols = ['admin', 'member', 'mentor']
const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        trim:true,
        lowercase: true
    },
    email: {
        type:String,
        required: true,
        trim:true,
        unique:true,
        lowercase: true,
        validate:{
            validator (value){
                return validator.isEmail(value)
            },
            message: 'Email is invalid'
        }
    },
    loggedIn: {
        type:Boolean,
        required: true,
    },
    role: {
        type:String,
        enum: rols,
        required: true,
        default:'member',
        lowercase: true
    }
})

const User = mongoose.model('User', userSchema)

export default User;