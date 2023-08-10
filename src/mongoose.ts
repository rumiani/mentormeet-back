// import mongoose from 'mongoose'
// mongoose.connect('mongodb://localhost:27017/mentorship-ser', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// const User = mongoose.model('User', {
//     name: {
//         type:String,
//         required:true,
//         trim: true,

//     },
//     email: {
//         type: String,
//         required: true,

//     },
//     password:{
//         type: String,
//         required: true,
//         minlength:6,
//         validate: (value)=>{
//             if(value.includes('password'))
//                 throw new Error('Password must not include the word "password"') 
//         }
//     }
// })
// const Task = mongoose.model('Task', {
//     des: {
//         type:String,
//         required:true,
//         trim: true,

//     },
//     complete: {
//         type: Boolean,
//         default: false,
//     }
// })
// const user = new User({
//     name: 'maz',
//     email: 'email',
//     password: 'passd'
// })
// const task = new Task({
//     des: 'sdflsdjfdsjfildsfs l jl lsk jlsfk',
// })
// user.save().then((user)=>{
//     console.log(user);
// }
// ).catch((err) => {
//     console.log(err);
// })
// task.save().then((task)=>{
//     console.log(task);
// }
// ).catch((err) => {
//     console.log(err);
// })