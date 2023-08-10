import mongoose, { Schema, Model } from "mongoose";
import validator from 'validator';

enum UserRole {
    Member = 'member',
    Mentor = 'mentor',
}
interface IUser {
    username: string,
    email: string,
    loggedIn: boolean,
    role: UserRole,
}
const User:<IUser> =  mongoose.model('User',{
    username: {
        type:String,
        required: true,
        trim:true,
    },
    email: {
        type:String,
        required: true,
        trim:true,
        unique:true,
        validate(value:string) {
            if(!validator.isEmail(value)){
                return new Error('Email is invalid')
            }
        }
    },
    loggedIn: {
        type:Boolean,
        required: true,
    },
    role: {
        type:String,
        enum: Object.values(UserRole),
        required: true,
        default:UserRole.Member,
    }
})
// const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;